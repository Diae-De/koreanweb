import React from 'react'
import Footer from '../footer/Footer'
import HeroSec from '../herosec/HeroSec'
import Mainsec from '../main/Mainsec'
import Navbar from '../navbar/Navbar'
import {SliderObj} from '../main/MainData'
import {proddata} from '../main/ProductData'
import Mainfooter from '../mainfooter/Mainfooter'
import {footerdata} from '../mainfooter/mainfooterData'

export default function Home() {
  return (
    <>
        <Navbar/>
        <HeroSec/>
        <Footer/>
        <Mainsec data={SliderObj} prodata={proddata}/>
        <Mainfooter footdata={footerdata}/>
    </>
  )
}
