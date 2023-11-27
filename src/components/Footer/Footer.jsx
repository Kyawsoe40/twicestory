import React from 'react'
import { FaFacebookF, FaInstagram, FaSpotify, FaTiktok, FaTwitter, FaYoutubeSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = ({colour}) => {
  return (
    <div className={`flex justify-between absolute w-screen bottom-5 z-10 ${colour}`}>
        <div className="flex text-xl pl-5" >
            <Link to='https://www.instagram.com/twicetagram' target='_blank' className='px-2 hover:px-3 duration-200'><FaInstagram /></Link>
            <Link to='https://www.facebook.com/JYPETWICE' target='_blank' className='px-2 hover:px-3 duration-200'><FaTwitter /></Link>
            <Link to='https://twitter.com/JYPETWICE' target='_blank' className='px-2 hover:px-3 duration-200'><FaFacebookF /></Link>
            <Link to='https://www.youtube.com/c/twice' target='_blank' className='px-2 hover:px-3 duration-200'><FaYoutubeSquare /></Link>
            <Link to='https://www.tiktok.com/@twice_tiktok_official' target='_blank' className='px-2 hover:px-3 duration-200'><FaTiktok /></Link>
            <Link to='https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0?si=FVcbo804QoW2vbVdhP8D4A' target='_blank' className='px-2 hover:px-3 duration-200'><FaSpotify /></Link>
        </div>
        <div className="pr-5 font-extrabold text-sm tracking-wide">
          Copyright © 2023 By KSH. All rights reserved.
        </div>
    </div>
  )
}

export default Footer