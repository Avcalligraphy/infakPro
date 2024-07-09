import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import { database } from "../../Database/Fire";
import { onValue, ref } from "firebase/database";

export default function AuthenticatedAdmin({ children }) {
  const [data, setData] = useState();
  // console.log("databaru ",data)
  const starCountRef = ref(database, `users/alarm/`);
  useEffect(() => {
    // Membaca data dari Firebase saat komponen pertama kali dimuat
    const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setData(data);
        }
      });
    };

    fetchData();

    // Membersihkan listener ketika komponen tidak lagi digunakan
    return () => {
      const starCountListener = onValue(starCountRef, () => {});
      starCountListener();
    };
  }, [starCountRef]);
  return (
    <>
      <div className="mx-auto max-w-screen block">
        <Navbar />
        {/* <AlertComponent data={data} /> */}
        {/* End Sidebar  */}

        {/* Start Content  */}
        <div className="">
          <div className="">
            <main className="">{children}</main>
          </div>
        </div>
        {/* End Content  */}
      </div>
      {/* <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
        <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
          Sorry, this page only supported on 1024px screen or above
        </div>
      </div> */}
    </>
  );
}
