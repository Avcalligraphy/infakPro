import React from 'react';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';

const PraySchedule = ({ name, onClick }) => {
  const [filename, setFilename] = React.useState('');
  const [taking, setTaking] = React.useState(1);
  const [responseMessage, setResponseMessage] = React.useState('');
  const [latestPhoto, setLatestPhoto] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const proxyUrl = 'http://192.168.1.25:8080/';

  const generateRandomFilename = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const fetchPhotos = async () => {
    const url = 'http://192.168.1.34:5000/api/get/photo';

    try {
      const response = await fetch(proxyUrl + url);
      if (response.ok) {
        const data = await response.json();
        if (data.photos.length > 0) {
          setLatestPhoto(data.photos[0]);
        }
      } else {
        console.error('Failed to fetch photos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  React.useEffect(() => {
    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 5000); // Fetch photos every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-between items-end gap-[20px] px-[16px] bg-gradient-to-r from-[#0D377B] to-[#04214D] rounded-[24px] py-[16px] shadow-md shadow-black">
      {latestPhoto ? (
        <img src={latestPhoto} className='w-[150px] rounded-[15px] h-auto object-cover' alt="Latest Photo" />
      ) : (
        <img
          alt="masjid"
          src={`/images/${name === 'moon' ? 'moon' : 'venus'}.png`}
          className="w-[120px] h-auto object-cover"
        />
      )}
      <div>
        <button onClick={onClick} disabled={loading}>
          <i className='bx text-white text-[30px] hover:text-[35px] bxs-camera translate-y-0 hover:-translate-y-1'></i>
        </button>
      </div>
    </div>
  );
};

export default PraySchedule;
