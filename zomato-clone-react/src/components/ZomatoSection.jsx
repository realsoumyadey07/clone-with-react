import React from "react";
import style from "../components/ZomatoSection.module.css";
import Navbar from "./Navbar";

function ZomatoSection() {
  return (
    <div className={`${style.cover}`}>
      <div className={`${style.container}`}>
        <Navbar />
        <h1 className={`${style.zomato}`}>ZOMATO</h1>
        <p className={`${style.para}`}>
          Find the best restaurants, cafes and bars in India
        </p>
      </div>
    </div>
  );
}
export default ZomatoSection;
