import React from 'react'
import './mainsec.css'
import { motion } from "framer-motion"
import { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'

export default function Mainsec({data,prodata}) {

    const [width,setWidth] = useState(0);
    const corsor =useRef();
    useEffect(()=>{
        setWidth(corsor.current.scrollWidth - corsor.current.offsetWidth);
    },[])
  return (
    <>
    <div className="main">
        <Slide left>
        <div className="descimg">
            <p className="deschead">HERE NOW MYSELF</p>
            <p className="headinfo">Lorem ipsum dolor sit amet consectetur</p>
            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium cupiditate, 
                doloribus impedit possimus harum reprehenderit vel quos qui quaerat rerum nam maxime. Quidem,
                nostrum possimus totam quaerat perferendis nihil.</p>
        </div>
        </Slide>
        <Slide right>
        <div className="img"><img src="../../../../img/main1.jpg"/></div>
        </Slide>
    </div>
    <div className="backgroundcolo">
        
    <div className="mainslid">
    <h1>COSMETICS LINES</h1>
        <motion.div ref={corsor} drag="x" dragConstraints={{right:0, left:-width}} className="innercoursor">
            {data.map((slid,index) => {
                return(
                    <>
                    <motion.div className="imgslid" key={index}>
                        <Zoom>
                        <img src={slid.imge}/>
                        <p className="title">{slid.title}</p>
                        <p className="descti">{slid.desc}</p>
                        </Zoom>
                    </motion.div>
                    </>
                )
            })}
        </motion.div>
    </div>
    </div>
    <div className="mainproduct">
    <h1>HITS</h1>
        <div className="products">
            {prodata.map((product,index)=>{
                return(
                    <>
                    <Slide bottom>
                    <div className="product">
                        <img src={product.proimg}/>
                        <p className="protitle">{product.protitle}</p>
                        <p className="prodesc">{product.prodesc}</p>
                        <div className="footerpro">
                            <p className="btnpro">{product.probtn}</p>
                            <p className="proprice">{product.proprice}</p>
                        </div>
                    </div>
                    </Slide>
                    </>
                )
            })}
        </div>
    </div>
        
    </>
  )
}
