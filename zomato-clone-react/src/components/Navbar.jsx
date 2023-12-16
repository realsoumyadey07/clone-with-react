import React from 'react'
import '../App.css'
import style from '../components/Navbar.module.css'

function Navbar() {
  return (
    <>
     <div className={`${style.navbar}`}>
          <div ></div>
          <div className={`${style.rightNavbar}`}>
            <div >Add restaurant</div>
            <div >Log in</div>
            <div >Sign up</div>
            <div >
              <i ></i>
            </div>
          </div>
        </div>
    </>
  )
}
export default Navbar