import React from 'react'

const BoxNotif = () => {
  return (
    <div className="h-[112px] w-full rounded-[5px] shadow-md px-[16px] py-[8px] shadow-gray-500">
      <h1 className="text-[14px] font-semibold text-black">Sholat Maghrib</h1>
      <p className="mt-[7px] text-[11px] text-black ">
        Sudah memasuki waktu sholat maghrib, <br /> Segera kumandangkan adzan!
      </p>
      <div className="flex justify-end gap-[11px] mt-[15px]">
        <button className="bg-blue-500 w-[60px] py-[6px] rounded-[5px] text-[11px] shadow-md shadow-gray-500">
          Ya
        </button>
        <button className="  w-[60px] py-[6px] rounded-[5px] text-[11px] shadow-md shadow-gray-500 text-black">
          Tidak
        </button>
      </div>
    </div>
  );
}

export default BoxNotif