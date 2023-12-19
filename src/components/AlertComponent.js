import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as geolib from "geolib";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertComponent = ({ data }) => {
  console.log(data?.alarm)
  const navigate = useNavigate();
  const [alarmActive, setAlarmActive] = useState();
  // console.log(alarmActive)

  const dangerZone = {
    lat: -7.817492621702849,
    lon: 110.3787614679743,
  };
  const location = {
    lat: data?.lat,
    lon: data?.lon,
  };

  const handleToggleAlarm = () => {
    setAlarmActive(!alarmActive);
  };

  useEffect(() => {
    let watchId;

    if (data?.alarm) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const distance = geolib.getDistance(
            { latitude, longitude },
            dangerZone
          );
          const dangerRadius = 1000;

          if (distance > dangerRadius) {
            // Menampilkan notifikasi
            Swal.fire({
              title: "Bahaya",
              text: "Kotak Infak Anda Berada Dalam Bahaya",
              icon: "error",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Hentikan",
            }).then((result) => {
              if (result.isConfirmed) {
                // Hentikan notifikasi dan audio
                Swal.close();
                audio.pause();
                audio.currentTime = 0;

                // Berpindah ke halaman /maps
                navigate("/maps");
              }
            });

            // Memutar suara bahaya
            const audio = new Audio("/sound/audio.mp3");
            audio.volume = 1;
            audio.play();
          }
        },
        (error) => console.error(error),
        { enableHighAccuracy: true }
      );
    }

    // Membersihkan watchId ketika komponen unmount atau alarm dinonaktifkan
    return () => {
      if (data?.alarm) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [data?.alarm, navigate]);

  return (
    <div />
  );
};

export default AlertComponent;
