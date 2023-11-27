import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
const NavbarToggler = ({navToggler,isToggle}) => {
  return (
    <div className='overflow-hidden'>
      <Link to="/" onClick={()=>navToggler(false)}><h1 className={`overflow-y-hidden text-6xl max-md:text-5xl max-sm:text-4xl top-0 cursor-pointer ml-10 px-1 fixed pt-8 vinasans-font z-50 duration-300 ${isToggle?'text-custom-light':'text-custom-dark'}`}>TWICESTORY</h1></Link> 
        <button onClick={()=> navToggler(!isToggle)} className='cursor-pointer fixed right-10 py-10 float-right z-50 text-4xl max-sm:text-3xl font-bold ' style={{cursor:'pointer',color: isToggle?'#B6B2AE':'#4A454D'}}>{isToggle?<RxCross1 />:<HiMenuAlt3 />}</button>
    </div>
  )
}

export default NavbarToggler