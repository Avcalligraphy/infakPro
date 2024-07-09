import React from "react";
import BoxFriends from "../components/BoxFriends";
import AuthenticatedUser from "../Layouts/Authenticated";

const Friends = ({ data }) => {
  const firstLetter = (item) => {
    return item.name.charAt(0).toUpperCase();
  }
  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5]">
        <div className="rounded-b-[30px] bg-[#473F97] px-[24px] pb-[20px] w-full shadow-md shadow-black">
          <div className="flex justify-between mt-[51px]">
            <i className="bx bx-menu-alt-left text-[30px]"></i>
            <h1 className="text-[24px] font-semibold">Otocope</h1>
            <i className="bx bx-bell text-[30px]"></i>
          </div>
        </div>
        <div className="px-[24px]">
          <h1 className="text-black text-[20px] font-semibold mt-[30px]">
            Teman Takmir
          </h1>
          <div className="grid grid-cols-1 gap-[10px] mt-[27px]">
            {data && Object.keys(data).length > 0 ? (
              Object.values(data).map((item, key) => (
                <BoxFriends
                  key={key}
                  abjad={firstLetter(item)}
                  name={item.name}
                />
              ))
            ) : (
              <p>data tidak ditemukan</p>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
};

export default Friends;
