'use client'
import {Link as ScrollLink } from "react-scroll"

//import React from 'react'
const links = [
 { name: 'home', target: 'home', offset: -100 },
 { name: 'about', target: 'about', offset: -80 },
 { name: 'class', target: 'class', offset: -80 },
 { name: 'team', target: 'team', offset: 0 },
 { name: 'prices', target: ' ', offset: -40 },
 { name: 'testimonial', target: 'testimonial', offset: 0 },
 { name: 'faq', target: 'faq', offset: 0 },
 { name: 'contact', target: 'contact', offset: 0 },

]


const Nav = ({ containerStyles } : { containerStyles : string}) => {
  return (
    <nav className={`${containerStyles}`} >
      { links.map((link, index) => {
      return (
        <ScrollLink
        offset={link.offset}
        to={link.target}
        smooth
        spy
        activeClass='active'
        key={index}
        className=" cursor-pointer hover:text-prim transition-all  "
        onClick={() => console.log(`Navigating to ${link.target}`)} // Debugging log
        >
            {link.name}
        </ScrollLink>
      );

      })}
    </nav>
  )
}

export default Nav
