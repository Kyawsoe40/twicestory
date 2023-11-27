import React from 'react'
import { Link } from 'react-router-dom'

const DiscoCard = ({item}) => {
  return (
    <Link to={`/discography/${item.slug}`} className="cursor-pointer">
        <div className="img-hover">
          <img src={item.album_cover} className='w-full' alt="cover" />
        </div>
        <div className="flex  py-5 text-custom-dark montserrat-font font-bold">
          <h1 className='w-1/2'>{item.title}</h1>
          <h1 className='w-1/2 text-right'>{item.release_date.slice(0,10)}</h1>
        </div>
    </Link>
  )
}

export default DiscoCard