import React, { useState } from 'react'
import AuthenticatedAdmin from '../../Layouts/AuthenticatedAdmin'
import { ref, set, update } from 'firebase/database';
import { database } from '../../Database/Fire';

const AdminPage = () => {
    const [alarmActive, setAlarmActive] = useState(false);
    const handleToggleAlarm = () => {
      setAlarmActive(!alarmActive);
      set(ref(database, `users/alarm/`), {
        alarm: !alarmActive
      });
    };
  return (
    <AuthenticatedAdmin>
      <div className='flex justify-center items-center min-h-screen'>
        <button onClick={handleToggleAlarm}>
          {alarmActive ? "Matikan Alarm" : "Aktifkan Alarm"}
        </button>
      </div>
    </AuthenticatedAdmin>
  );
}

export default AdminPage