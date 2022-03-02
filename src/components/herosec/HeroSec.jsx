import React from 'react'
import './herosec.css'
import {GiCircle} from 'react-icons/gi'
import {CgArrowLongRight} from 'react-icons/cg'
import Slide from 'react-reveal/Slide'

export default function HeroSec() {
  return (
    <>
        <div className="hero">
            <Slide top>
            <div className="para">
                <p>KOREAN COSMETICS OF THE PREMI SEGMENT</p>
            </div>
            </Slide>
            <Slide bottom>
            <div className="desc">
                <p>Contemporary,luxurybased beauty brand that defines and creates the tendes in beauty standards</p>
            </div>
            </Slide>
            <div className="icons">
                <div className="circle">
                    <GiCircle/>
                </div>
                <div className="arrow">
                    <CgArrowLongRight/>
                </div>
                <div className="goto">
                    Go to catalog
                </div>
                
            </div>
            
        </div>
    </>
  )
}
