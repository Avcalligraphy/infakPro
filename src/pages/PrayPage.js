import React from 'react'
import BoxPray from '../components/BoxPray';
import { useNavigate } from 'react-router-dom';
import ClockComponent from '../components/ClockComponents';

const PrayPage = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen bg-[#EEF1F5]">
      <div className="rounded-b-[30px] bg-[#473F97] px-[24px] pb-[12px] shadow-md shadow-black">
        <div className="flex justify-start mt-[51px]">
          <i
            className="bx bx-chevron-left text-[30px]"
            onClick={() => navigate(-1)}
          ></i>
        </div>
        <h1 className="text-[32px] font-semibold text-center">Jadwal Sholat</h1>
        <h1 className="text-[20px] mt-[34px] text-center font-medium ">
          <ClockComponent />
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 gap-[20px] mt-[37px] px-[47px]">
        <BoxPray title="Shubuh" hours="03.46" />
        <BoxPray title="Dzuhur" hours="11.25" />
        <BoxPray title="Ashar" hours="14.49" />
        <BoxPray title="Maghrib" hours="17.40" />
        <BoxPray title="Isya" hours="18.56" />
      </div>
    </div>
  );
}

export default PrayPage