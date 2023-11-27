import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";
const AlbumInfo = ({item}) => {
  return (
    <div className="flex px-20 gap-20">
                <div className="w-[700px] pl-20">
                    <img className='w-full' src={item.album_cover} alt="" />
                </div>
                <div className="w-full py-10  flex flex-col gap-5">
                    <h2 className='text-3xl overflow-hidden vinasans-font font-lighter'>{item.artist}</h2>
                    <h2 className='text-6xl vinasans-font overflow-hidden'>{item.title}</h2>
                    <h3 className='text-lg vinasans-font tracking-widest'>{item.type}</h3>
                    <div className="">
                    <p className='vinasans-font tracking-wider'>Production Label - {item.label.toString("")}</p>
                    <p className='vinasans-font tracking-wider'>Release Date - {item.release_date.slice(0,10)}</p>
                    </div>
                    <p className='raleway-font tracking-wide text-md whitespace-pre-line'>{
                        item.description
                        
                    }</p>
                    <div>
                        <div className="py-10 flex items-center gap-5">
                            <h2 className='text-2xl overflow-hidden  font-bold'>Track List</h2>
                            <Link to={item.spotify} target='_blank' className=' font-semibold flex items-center gap-2 rounded-full' style={{background:"#1db954"}}><FaPlayCircle className='text-4xl' /></Link>
                        </div>
                        <div className="flex flex-col ralewayt-font text-lg  list-decimal">
                            {item.tracks.map((track)=> <p className=' capitalize' key={track}>{item.tracks.indexOf(track)+1}. {track}</p>)}
                        </div>
                    </div>
                </div>
                
            </div>
  )
}

export default AlbumInfo