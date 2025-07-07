'use client'
import Link from "next/link"
//import React from 'react'
import Nav from "./Nav"
import MobileNav from './MobileNav'
import logo from '../../../public/rblogo.png'
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
        //detect scroll 
        setHeaderActive( window.scrollY > 50)
    };
    //add scroll event
    window.addEventListener('scroll', handleScroll);
    //clear scroll event
    return ()  => {
        window.removeEventListener('scroll',handleScroll);
    };
   
  }, [] )

  console.log(headerActive)
  return (
    <header className={` ${headerActive ? ' h-[80px]' : ' h-[98px]'} 
     fixed   max-w-[1920px]  top-0 w-full bg-white   h-[100px] transition-all z-50 `}>
        <div className="container">
            <div className="  flex items-center justify-between ">
            {/*Logo*/}
            <Link href='/'>
            <Image src={logo}  width={117} height={55}  alt="logo"/>
            </Link>

            </div>
           
      
          
        </div>
   
    </header>
  )
}

export default Header
