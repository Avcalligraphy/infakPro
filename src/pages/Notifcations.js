import React from 'react'
import BoxNotif from '../components/BoxNotif';
import { useNavigate } from 'react-router-dom';

const Notifcations = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen pt-[90px] px-[7px]">
      <div className='flex gap-[50px] items-center'>
        <i
          className="bx bx-chevron-left text-[30px]"
          onClick={() => navigate(-1)}
        ></i>
        <h1 className="text-[24px] font-semibold text-white">Notifikasi</h1>
      </div>
      <div className="mt-[24px] w-full bg-white px-[7px] py-[9px] rounded-[20px] grid grid-cols-1 gap-[10px]">
        <BoxNotif />
        <BoxNotif />
        <BoxNotif />
        <BoxNotif />
      </div>
    </div>
  );
}

export default Notifcations