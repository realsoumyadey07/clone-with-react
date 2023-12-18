import React from 'react'
import style from '../components/LocationHeading.module.css'

function LocationHeading() {
  return (
    <div className={`${style.center}`}>
     <h1 className={`${style.locationHeading}`}>Popular Location in  <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" alt="india" />  India</h1>
     <p className={`${style.para}`}>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
    </div>
  )
}
export default LocationHeading;