import React from 'react'
import style from '../components/ZomatoSection.module.css'

function ZomatoSection() {
  return (
    <div className={`${style.container}`}>
     <h1 className={`${style.zomato}`}>ZOMATO</h1>
     <p className={`${style.para}`}>Find the best restaurants, cafes and bars in India</p>
    </div>
  )
}
export default ZomatoSection