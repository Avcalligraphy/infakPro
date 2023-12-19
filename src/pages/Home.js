import React from 'react'
import Button from '../components/Button';
import PraySchedule from '../components/PraySchedule';
import AuthenticatedUser from '../Layouts/Authenticated';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5]">
        <div className="rounded-b-[40px] bg-[#473F97] px-[24px]">
          <div className="flex justify-between mt-[51px]">
            <i className="bx bx-menu-alt-left text-[30px]"></i>
            <NavLink to="/notification">
              <i className="bx bx-bell text-[30px] "></i>
            </NavLink>
          </div>
          <h1 className="text-[24px] font-semibold mb-[32px] mt-[46px]">
            Infak Pro
          </h1>
          <p className="text-[20px] font-semibold">Lacak Posisi Kotak Amal !</p>
          <p className="text-[14px] max-w-[327px] mt-[11px] mb-[21px]">
            Klik tombol merah untuk mengetahui posisi akhir kotak infak
          </p>
          <div className="flex justify-center">
            <NavLink to="/maps">
              <Button
                text="Lacak Kotak Infak"
                image={<i className="text-[30px] bx bxs-map"></i>}
                gap="gap-[5px]"
                color="w-[211px] bg-[#FF4D58] shadow shadow-md shadow-black mb-[37px]"
              />
            </NavLink>
          </div>
        </div>
        <div className="px-[24px] mt-[86px]">
          <PraySchedule />
        </div>
      </div>
    </AuthenticatedUser>
  );
}

export default Home