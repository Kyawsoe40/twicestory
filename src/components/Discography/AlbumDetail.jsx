import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import {discographies} from './data'

import AlbumInfo from './AlbumInfo';
const AlbumDetail = () => {
    const [isReady,setIsReady]=useState(false)
    const {title}=useParams()
    const navigate=useNavigate()
    const [albums,setAlbums]=useState([])
        useEffect(()=>{
            setAlbums([])
            for (const [key, value] of Object.entries(discographies)) {
            for(let v of value){
                setAlbums((a)=>[...a,{...v,"lang":key}])
            }
            }
            setIsReady(true)
        },[])
        const item=albums.filter((v)=> v.slug === title)
        
  return (
    isReady? 
       <div className="py-32">
            <div className="py-10 pl-20 max-md:pl-6">
                <button onClick={()=> navigate(-1)} className='text-custom-dark montserrat-font font-bold text-hover-grad'>Back</button>
            </div>
            <AlbumInfo item={item[0]} />
            <div className="flex max-lg:flex-col max-lg:items-center gap-5 justify-center py-20">
                {item[0].music_video? 
                    item[0].music_video.map((m)=>
                    <iframe className='w-[560px] max-sm:w-full' height="315" src={m} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>)
                :''}
            </div>
       </div>
    : 'Loading...'
  )
}

export default AlbumDetail