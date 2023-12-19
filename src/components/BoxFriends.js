import React from 'react'

const BoxFriends = ({abjad, name}) => {
  return (
    <div className="flex items-center px-[20px] py-[14px] gap-[24px] bg-[#FFFFFF] shadow-md shadow-black rounded-[20px] h-[75px]">
      <div className="flex justify-center items-center text-[17px] font-semibold rounded-full text-black bg-[#F5F7FA]">
        {abjad}
      </div>
      <h1 className="text-[16px] text-black">{name}</h1>
    </div>
  );
}

export default BoxFriends