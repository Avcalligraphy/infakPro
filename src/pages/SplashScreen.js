import React from 'react'

const SplashScreen = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full">
        <div className='flex justify-center'>
          <img alt="logo" src="/images/logo.png" className="w-auto h-[150px]" />
        </div>
        <h1 className='text-center text-[24px] font-semibold mt-[30px]'>Infak Pro</h1>
      </div>
    </div>
  );
}

export default SplashScreen