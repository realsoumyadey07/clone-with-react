import React from 'react'
import LocationItem from './LocationItem';
import style from '../components/Location.module.css';

function Locations({locations}) {
  return (
    <ul className={`${style.ul}`}>
     {locations.map((e)=>{
          return <LocationItem key={e} e={e}/>
     })}
    </ul>
  )
}
export default Locations;