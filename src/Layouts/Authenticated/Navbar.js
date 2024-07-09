import React, { useState } from 'react'
import { NavLink, Navigate, useLocation } from 'react-router-dom';
import {navigationLinks} from './MenuListUser'
import { signOut } from 'firebase/auth';
import { auth } from '../../Database/Fire';

export default function Navbar() {
  const [selected, setSelected] = useState(null);
  const {pathname} = useLocation()
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("uid");
        <Navigate to="/login" />;
      })
      .catch((err) => {
        console.log(err);
      });
    // .catch((err) => console.log(err));
  };
  return (
    <nav className="navbar mobile">
      {navigationLinks.map((item, index) => {
        const isActive = pathname === item.link;

        return (
          <NavLink
            to={item.link}
            key={item.link}
            onClick={() => setSelected(isActive ? null : index)}
          >
            <div
              className={`${
                selected === index || isActive
                  ? "bg-[#596FB7] p-[7px] rounded-[7px]"
                  : ""
              }`}
            >
              <i className={`bx ${item.icon} text-[20px] ${selected === index || isActive ? 'text-[#ffff]' : 'text-[#999FBF]'} `}></i>
            </div>
          </NavLink>
        );
      })}
      <div onClick={signOutHandler} className="">
        <i className="bx bx-log-out text-[#999FBF] text-[20px]"></i>
      </div>
    </nav>
  );
}
