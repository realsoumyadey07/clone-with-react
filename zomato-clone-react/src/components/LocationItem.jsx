import React from 'react'
import style from '../components/LocationItem.module.css'

function LocationItem({e}) {
  return (
    <>
     <li className={`${style.item}`}>{e}</li>
    </>
  )
}
export default LocationItem;