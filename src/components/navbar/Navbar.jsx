import React from 'react'
import './navbar.css'
import {BiCartAlt,BiHeart,BiSearch} from 'react-icons/bi'
import {BsListNested} from 'react-icons/bs'
import Fade from 'react-reveal/Fade'

export default function Navbar() {
  return (
    <>
        <div className="bgimg"><img src="../../../../img/bgimage.jpg"/></div>
        <div className="overlay"></div>
        <div className="navbar">
          <Fade top>
            <div className="logo">DEAI</div> 
            <div className="navigation">
                <li>HERA STORY</li>
                <li>MAKEUP</li>
                <li>SKINCARE</li>
                <li>FRAGRANCE</li>
                <BsListNested className="navicon"/>
            </div>
            
            <div className="iconsnav">
                <BiCartAlt/>
                <BiSearch className="search"/>
                <BiHeart/>
            </div>
            </Fade>
        </div>
    </>
  )
}
