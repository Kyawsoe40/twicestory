import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Navbar = ({navToggler,isToggle}) => {
  return (
    <div className={`w-screen h-screen z-30 fixed duration-300 delay-100 ${isToggle?"top-0":"-top-full"} `}  style={{background:'#433F44',opacity:0.8}}>
      <div className="w-screen h-screen flex justify-end">
      <ul className='flex flex-col justify-center items-start w-3/5'>
        <Link to="" onClick={()=>navToggler(false)} ><li className='text-3xl text-hover-grad block px-6 my-2 font-bold tracking-wider montserrat-font duration-200 hover:scale-125' style={{color:'#fcfcfc'}}>Home</li></Link>
        <Link to="profiles" onClick={()=>navToggler(false)} ><li className='text-3xl text-hover-grad block px-6 my-2  font-bold tracking-wider duration-200 hover:scale-125 montserrat-font' style={{color:'#fcfcfc'}}>Profiles</li></Link>
        <Link to="discography" onClick={()=>navToggler(false)} ><li className=' text-3xl text-hover-grad block px-6 my-2  font-bold tracking-wider duration-200 hover:scale-125 montserrat-font' style={{color:'#fcfcfc'}}>Discography</li></Link>
        
      </ul>
      </div>
      <Footer colour={"text-white"} />
    </div>
  )
}

export default Navbar