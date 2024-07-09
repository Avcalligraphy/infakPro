import React, { useEffect, useState } from "react";

const ClockComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Membersihkan interval ketika komponen unmount
  }, []); // Efek hanya dijalankan sekali setelah render pertama

  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(currentDate);
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
  }).format(currentDate);

  return (
    <h1>{formattedTime}</h1>
  );
};

export default ClockComponent;
