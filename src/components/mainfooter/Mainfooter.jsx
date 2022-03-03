import React from 'react'
import './mainfooter.css'
import {AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'

export default function Mainfooter({footdata}) {
  return (
    <>
        <div className="footercomp">
            <div className="footermarg">
                <div className="footerhead">
                <div className="logo">DEAI</div> 
                <div className="socialicon">
                    <AiOutlineInstagram/>
                    <FaTelegramPlane className="tele"/>
                    <AiOutlineTwitter/>
                </div>
            </div>
            <div className="footerinfo">
                {footdata.map((footer,index) =>{
                    return (
                        <div className="allfootdata" key={index}>
                            <div className="footerflex">
                                <p className="mainfootertitle">{footer.footertitle}</p>
                                <p className="mainfooterdesc">{footer.footerdesc}</p>
                            </div>
                        
                        </div>
                    )
                    
                })}
            </div>
            </div>
            
        </div>
    </>
  )
}
