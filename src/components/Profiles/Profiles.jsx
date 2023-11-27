import React, {  useState } from 'react'
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
    api.start({
      from: {x:1000},
      to: {x:0},
    })
    api2.start({
      from:{opacity:0},
      to:{opacity:1},
    })
  }

  return (
    <div  style={{background:'#fcfcfc'}}>
      <div className="my-32 px-20 flex ">
        <div className="pt-28 pr-20">
          {
            members.map((m)=>(
              <div onClick={()=>handleClick(m)} key={m.name} aria-label={m} className="cursor-pointer text-lg tracking-wide text-hover-grad text-custom-dark montserrat-font hover:scale-110 font-bold px-10">{m.name}</div>
            ))
          }
        </div>
        <div className="w-full flex justify-around items-center">
          <div className="py-10">
            <animated.div style={{...spring,width:'400px',height:'550px',zIndex:10,boxShadow:'10px 10px 10px #B6B2AE'}} className="mx-10 mt-10 relative" >
              <img style={{zIndex:10,width:'100%',height:'100%'}} src={member.img} alt='nayeon' />
            </animated.div>
            <div className="mx-0 top-36 absolute" style={{width:'400px',height:'550px',zIndex:0,backgroundImage: 'linear-gradient(to right,  #ff5fa2,	#fccfa6)'}}></div>
          </div>
          <animated.div className="" style={{...spring2,zIndex:1}}>
            <div className=" text-custom-dark text-lg" style={{textShadow:'1px 1px 2px #4A454D'}}>
              <h2 className='text-4xl font-bold overflow-y-hidden pb-10 montserrat-font italic'>{member.name}</h2>
              <p>Birth-name : {member.birthName[0]} / {member.birthName[1]}</p>
              <p>Birthday : {member.birthday}</p>
              <p>MBTI : {member.mbti} </p>
              <p>Zodiac Sign : {member.zodiac} </p>
              <p>Nationality : {member.nationality} </p>
              <p>Blood Type : {member.blood} </p>
              <p>Postion : {member.position.toString(',')} </p>
              <p className='flex items-center'>Instagram Account : <Link to={member.instagram} className='flex items-center font-semibold pl-2 gap-1' target='_blank '><FaLink /> {member.instagram.slice(26,member.instagram.length)}</Link></p>
            </div>
          </animated.div>
          
        </div>
      </div>
    </div>
  )
}

export default Profiles