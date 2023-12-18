import React from 'react'
import style from '../components/LocationItem.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function LocationItem({e}) {
  return (
    <>
     <li className={`${style.item}`}>{e}<ArrowForwardIosIcon className={`${style.i}`}/></li>
    </>
  )
}
export default LocationItem;