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
    <header className={` ${headerActive ? ' h-[100px]' : ' h-[124px]'} 
     fixed   max-w-[1920px]  top-0 w-full bg-white   h-[100px] transition-all z-50 `}>
        <div className=" container  mx-auto h-full flex items-center justify-between px-10 ">
            {/*Logo*/}
            <Link href='/'>
            <Image src={logo}  width={117} height={55}  alt="logo"/>
            </Link>
             {/*mobile nav --- hidden on small devices*/}
             <MobileNav containerStyles={` ${headerActive ? ' top-[90px]' : 'top=[124px]'} 
              ${
                openNav 
                ? ' max-h-max pt-8 pb-10 border-gray/10' 
                : ' max-h-0 pt-0 pb-0 overflow-hidden  border-gray/0'}
               flex flex-col text-center gap-8 fixed bg-white w-full left-0 
               text-base uppercase font-medium  text-ter transition-all  xl:hidden`}
               />
            {/*desktop nav --- hidden on small devices*/}
        <Nav containerStyles='   flex gap-4 text-ter text-base uppercase font-medium transition-all  hidden  xl:flex '/>
            {/*hide/open menu button*/}
            <div className=" flex items-center gap-4">
                {/*login & register button*/}
                <div className=" text-ter flex items-center gap-4">
                    <button className=" hover:text-prim transition-all text-base uppercase font-medium">Login</button>
                    <button className=" hover:text-prim transition-all text-base uppercase font-medium">Cadastrar-se</button>
                </div>
            <button  
            onClick={() => setOpenNav(!openNav)}
            className="text-ter xl:hidden">
                <MdMenu className=" text-4xl" />
            </button>

            </div>
          
        </div>
   
    </header>
  )
}

export default Header
