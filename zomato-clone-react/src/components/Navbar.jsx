import React from "react";
import "../App.css";
import style from "../components/Navbar.module.css";
import { FaRegUser } from "react-icons/fa6";


function Navbar() {
  return (
    <>
      <div className={`${style.navbar}`}>
        <div></div>
        <div className={`${style.rightNavbar}`}>
          <div>Add restaurant</div>
          <div>Log in</div>
          <div>Sign up</div>
        </div>
        <FaRegUser className={`${style.userIcon}`}/>
      </div>
    </>
  );
}
export default Navbar;
