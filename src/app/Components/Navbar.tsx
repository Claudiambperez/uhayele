'use client'

import Image from "next/image"
import Link from "next/link"
import { assets } from "../assets/images"
import { NAV_LINKS } from "../../../constants"

import { IoIosPerson } from "react-icons/io";
import Button from "./Button";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleStickyNavbar = () => {
    if (navRef.current && menuRef.current) {
      const navHeight = navRef.current.getBoundingClientRect().height;
      const menuHeight = menuRef.current.getBoundingClientRect().height;

      if (window.scrollY > navHeight + menuHeight) {
        navRef.current.classList.add("sticky");
      } else {
        navRef.current.classList.remove("sticky");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }
  , []);

  const handleMenuClick = () => menuRef.current?.classList.toggle("hidden");

  return (
    <nav className=" flexBetween max-container   padding-container relative z-30 py-5 " ref={navRef} 
     >
      {/* Logo */}  
      <Link href="/">
        <Image src={assets.logorb}  alt="logo" width={74} height={29}/>
      </Link>
       {/* Menu */}  
      
      <ul className="hidden h-full gap-12 lg:flex" ref={menuRef} onClick={handleMenuClick} >
        {
            NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className=' "regular-16
                 flexCenter cursor-pointer text-[#B1A1C5] pb-1.5 transition-all  opacity-85' >
                    {link.label}
                    <hr  className=" border-none outline-none  h-0.5 bg-black w-3/5 m-auto hidden "/>
                </Link>
                
            ))}
        
      </ul>
       {/* NAV RIGHT */}  
      <div className="hidden lg:flex lg:items-center lg:justify-center ">
        <div className="hidden">
           <Link href="/" >
            <figure className="cursor-pointer">
              <Image
                src={assets.person_2}
                alt="profile"
                width={32}      
                height={32}
                className="rounded-full object-cover "
              />
              </figure> 
            </Link>
        </div>
        <Link href="/login">
          <Button 
           type ="button"
           title="Login"
           icon={IoIosPerson}
           variant=" cursor-pointer bg-[#B1A1C5] text-white transition-all h-8 w-28 gap-2  rounded-full group hover:border-[#B1A1C5] hover:border-1 hover:bg-white hover:text-[#B1A1C5]"
          />
        </Link>
      </div>
          <Image
        src={assets.menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block  cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar
