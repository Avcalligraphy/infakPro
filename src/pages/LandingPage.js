import React from 'react'
import Button from '../components/Button'

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className=' text-center mt-[163px] text-[64px] mb-[263px] font-bold '>Otocope</h1>
        <Button
          text="Mulai"
          color="bg-white shadow shadow-md shadow-black w-full text-[#473F97]"
        />
      </div>
    </div>
  );
}

export default LandingPage