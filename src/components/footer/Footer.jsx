import React from 'react'
import './footer.css'
import {AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'

export default function Footer() {
  return (
    <>
        <div className="footer">
            <div className="dab">W</div>
            <div className="social">
                <AiOutlineInstagram/>
                <FaTelegramPlane className="tele"/>
                <AiOutlineTwitter/>
            </div>
        </div>
    </>
  )
}
