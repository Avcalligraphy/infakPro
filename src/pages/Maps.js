import React from 'react'
import AuthenticatedUser from '../Layouts/Authenticated';
import MapsReact from '../components/Maps/maps';

const Maps = () => {
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5]">
        <div className="rounded-b-[30px] bg-[#473F97] px-[24px] pb-[12px] w-full shadow-md shadow-black z-50 fixed">
          <div className="flex justify-between mt-[51px]">
            <i className="bx bx-menu-alt-left text-[30px]"></i>
            <h1 className="text-[24px] font-semibold">Infak Pro</h1>
            <i className="bx bx-bell text-[30px]"></i>
          </div>
          <h1 className="text-[20px] mt-[31px]  font-semibold">
            Pelacak Kotak Infak
          </h1>
        </div>
        <div className="relative ">
          <MapsReact />
        </div>
      </div>
    </AuthenticatedUser>
  );
}

export default Maps