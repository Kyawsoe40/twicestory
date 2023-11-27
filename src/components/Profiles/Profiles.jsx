import React, {  useEffect, useState } from 'react'
import { useSpring ,animated} from '@react-spring/web';
import  {members}  from './data';
import { Link } from 'react-router-dom';
import { FaLink } from "react-icons/fa";
const Profiles = ({setInitialPage}) => {
  setInitialPage(0)
  const [member,setMember]=useState(members[0]);

  const [spring,api]=useSpring(()=>({
    from: {x:1000},
    to: {x:0},
    config:{duration:500},
    delay: 500
  }))
  const [spring2,api2]=useSpring(()=>({
    from:{opacity:0},
    to:{opacity:1},
    config:{duration:1200},
    delay:500
  }))
  const handleClick=(e)=>{
    setMember(e)
  }

    api.start({
      from: {x:1000},
      to: {x:0},
    })
    api2.start({
      from:{opacity:0},
      to:{opacity:1},
    })


  return (
    <div  style={{background:'#fcfcfc'}}>
      <div className="my-32 px-20 max-xl:px-10 max-lg:pr-5 max-md:px-2 flex max-md:justify-around max-sm:flex-col">
        <div className="pt-28 pr-20 max-lg:pr-0 max-sm:grid grid-cols-3 gap-y-5">
          {
            members.map((m)=>(
              <div onClick={()=>handleClick(m)} key={m.name} aria-label={m} className="cursor-pointer text-lg max-sm:text-base tracking-wide text-hover-grad text-custom-dark montserrat-font hover:scale-110 font-bold px-10 max-md:px-0 max-sm:px-2 z-10">{m.name}</div>
            ))
          }
        </div>
        <div className="w-full max-md:w-auto flex lg:gap-5 max-lg:flex-col justify-around items-center">
          <div className="py-10">
            <animated.div style={{...spring,zIndex:10,boxShadow:'10px 10px 10px #B6B2AE'}} className="mx-10 max-xl:mx-6 max-lg:mx-0 max-lg:ml-5 mt-10 relative profile-img" >
              <img style={{zIndex:10,width:'100%',height:'100%'}} src={member.img} alt='nayeon' />
            </animated.div>
            <div className="mx-0 top-36 max-sm:top-[400px] absolute profile-img" style={{zIndex:0,backgroundImage: 'linear-gradient(to right,  #ff5fa2,	#fccfa6)'}}></div>
          </div>
          <animated.div className="" style={{...spring2,zIndex:1}}>
            <div className=" text-custom-dark text-lg flex flex-col max-lg:items-end" style={{textShadow:'1px 1px 2px #4A454D'}}>
              <h2 className='text-4xl max-md:text-2xl font-bold overflow-y-hidden pb-10 pr-2 montserrat-font italic'>{member.name}</h2>
              <p className='max-md:text-base'>Birth-name : {member.birthName[0]} / {member.birthName[1]}</p>
              <p className='max-md:text-base'>Birthday : {member.birthday}</p>
              <p className='max-md:text-base'>MBTI : {member.mbti} </p>
              <p className='max-md:text-base'>Zodiac Sign : {member.zodiac} </p>
              <p className='max-md:text-base'>Nationality : {member.nationality} </p>
              <p className='max-md:text-base'>Blood Type : {member.blood} </p>
              <p className='max-md:text-base'>Postion : {member.position.toString(',')} </p>
              <p className='flex items-center max-md:text-base'>Instagram Account : <Link to={member.instagram} className='flex items-center font-semibold pl-2 gap-1' target='_blank '><FaLink /> {member.instagram.slice(26,member.instagram.length)}</Link></p>
            </div>
          </animated.div>
          
        </div>
      </div>
    </div>
  )
}

export default Profiles