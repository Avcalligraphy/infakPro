import React from 'react'
import { NavLink } from 'react-router-dom';

const PraySchedule = () => {
  return (
    <NavLink to="/pray">
      <div className="flex items-center gap-[20px] bg-[#473F97] rounded-[24px]  shadow-md shadow-black">
        <img
          alt="masjid"
          src="/images/masjid.png"
          className="w-[157px] h-auto"
        />
        <h1 className="text-[24px] font-semibold">Jadwal Waktu Sholat</h1>
      </div>
    </NavLink>
  );
}

export default PraySchedule