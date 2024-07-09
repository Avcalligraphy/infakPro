import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import PraySchedule from '../components/PraySchedule';
import AuthenticatedUser from '../Layouts/Authenticated';
import { NavLink, useNavigate } from 'react-router-dom';
import ClockComponent from '../components/ClockComponents';
import Loader from '../components/Loader';


const Home = () => {
  const [dataAPI, setDataApi] = useState();
  const [name, setName] = useState('moon');
  const [loading, setLoading] = React.useState(false);
  const proxyUrl = 'http://192.168.1.25:8080/'
  const targetUrl = `http://192.168.1.25:8090/api/objects/info?name=${name}&format=json`;

  const generateRandomFilename = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };


  async function fetchData() {
    try {
      const response = await fetch(proxyUrl + targetUrl);
      const data = await response.json();
      setDataApi(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }


  const updateData = () => {
    fetchData();  
  };
  useEffect(() => {
    const intervalId = setInterval(updateData, 1000); // Memanggil updateData() setiap 1 detik
    return () => clearInterval(intervalId); // Membersihkan interval saat komponen unmount
  }, [name]); // Membuat efek bergantung pada nilai array kosong, sehingga hanya dijalankan sekali


  const handlePostCoordinate = async () => {
    const url = 'http://192.168.1.34:5000/api/set/coordinate'
    const data = {
      azimuth: dataAPI?.azimuth,
      altitude: dataAPI?.altitude
    };

    try {
      const response = await fetch(proxyUrl + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
        // window.location.reload()
        
      } else {
        console.log('Failed to take photo');
      }
    } catch (error) {
      console.error('Error:', error);

    }
  };

  const handlePostDataMoon = () => {
    handlePostCoordinate()
    setName('moon')
  }

  const handlePostDataVenus = () => {
    handlePostCoordinate()
    setName('sun')
  }

  const handlePostData = async () => {
    setLoading(true);
    const randomFilename = generateRandomFilename();
    const url = 'http://192.168.1.34:5000/api/set/photo';
    const data = {
      filename: randomFilename,
      taking: 1
    };

    try {
      const response = await fetch(proxyUrl + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        // setResponseMessage(responseData.message);
        // window.location.reload();
      } else {
        // setResponseMessage('Failed to take photo');
      }
    } catch (error) {
      console.error('Error:', error);
      // setResponseMessage('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if(loading) {
    return <Loader />
  }

  return (
    <AuthenticatedUser>
      <div className="w-full min-h-screen bg-[#EEF1F5] mt-[-48px] pb-[100px] ">
        <div className="rounded-b-[40px] bg-gradient-to-r from-[#0D377B] to-[#04214D] px-[24px] pt-[25px] pb-[32px] ">
          <div className="flex justify-between mt-[51px]">
            <NavLink to='/' >
            <i className="bx bx-menu-alt-left text-[30px]"></i>
            </NavLink>
          </div>
          <h1 className="text-[24px] font-semibold mb-[32px] mt-[46px]">
            Otocope
          </h1>
          <p className="text-[20px] font-semibold">Welcome to Otocope </p>
          <p className="text-[14px] max-w-[327px] mt-[11px] mb-[21px]">
          Please choose what celestial object you want to see today ?
          </p>
          <div className="flex justify-center gap-[30px] ">
            <button  className={`${name === 'moon' ? 'bg-[#9EB2F1] text-[#041F4A] font-bold' : 'bg-white text-black font-regular'}  text-[14px] py-[7px] w-full rounded-[10px]`} onClick={handlePostDataMoon}  >Moon</button>
            <button className={`${name === 'sun' ? 'bg-[#9EB2F1] text-[#041F4A] font-bold' : 'bg-white text-black font-regular'} text-[14px] py-[7px] w-full rounded-[10px]`} onClick={handlePostDataVenus} >Sun</button>
          </div>
        </div>
        <div className="px-[24px] mt-[30px]">
          <PraySchedule name={name} dataAPI={dataAPI} onClick={handlePostData} />
        </div>
        <div className="flex mx-[24px] mt-[25px] items-center gap-[20px] bg-gradient-to-r from-[#0D377B] to-[#04214D] rounded-[24px] py-[16px] px-[30px]  shadow-md shadow-black">
            <div className='w-full' >
            <h1 className=' font-bold text-[24px] '>Coordinates</h1>
            <div className='flex gap-[50px]'>
            <p className='font-regular text-[18px]' >{dataAPI?.azimuth.toFixed(3)}</p>
            <p className='font-regular text-[18px]' >{dataAPI?.altitude.toFixed(3)}</p>
            </div>
            </div>
        </div>
        <div className="flex mx-[24px] mt-[25px] items-center gap-[20px] ">
            <div className='flex justify-center items-center w-full  bg-gradient-to-r from-[#0D377B] to-[#04214D] rounded-[24px] h-[96px] ' >  
                <div>
                <h1 className='font-bold text-[24px] text-center ' >Time</h1>
                <h1 className='font-regular text-[18px] text-center ' >
                  <ClockComponent />
                </h1>
                </div>
            </div>
            <div className='flex justify-center items-center  w-full bg-gradient-to-r from-[#0D377B] to-[#04214D] rounded-[24px] h-[96px] ' >  
            <NavLink to='/maps' >
                <h1 className='font-bold text-[24px] text-center ' >Location</h1>
                <h1 className='font-regular text-[18px] text-center ' >Sleman</h1>
                </NavLink>
            </div>
        </div>
      </div>
    </AuthenticatedUser>
  );
}

export default Home