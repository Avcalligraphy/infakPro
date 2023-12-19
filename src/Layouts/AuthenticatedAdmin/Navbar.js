import React, { useState } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Database/Fire";
import { navigationLinks } from "./MenuListAdmin";

export default function Navbar() {
  const [selected, setSelected] = useState(null);
  const { pathname } = useLocation();
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
                  ? "bg-[#473F97] p-[7px] rounded-[7px]"
                  : ""
              }`}
            >
              {item.icon}
            </div>
          </NavLink>
        );
      })}
      <div onClick={signOutHandler} className="">
        <i className="bx bx-log-out text-[20px]"></i>
      </div>
    </nav>
  );
}
