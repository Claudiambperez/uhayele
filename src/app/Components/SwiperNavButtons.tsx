'use client'
import { TiMinus } from "react-icons/ti";
import React, { useState } from 'react';
import { useSwiper } from "swiper/react";
//import {} 

const SwiperNavButtons = ({
    containerStyles,
    btnStyles,
    iconStyles
} : {
    containerStyles: string;
    btnStyles: string;
    iconStyles: string;
}
) => {
     // State to manage hover status
  const [isHovered, setIsHovered] = useState(false);
   const swiper = useSwiper();
  return (
    <div className={`${containerStyles}`} >
    <button  className={`${btnStyles}`}  onClick={() => swiper.slideTo(0,200)}
    >
     
       <TiMinus className={`${iconStyles}`}  />
    </button>
    <button  className={`${btnStyles}`}   onClick={() => swiper.slideTo(0,200)}>
       <TiMinus className={`${iconStyles}`} />
    </button>
    <button  className={`${btnStyles}`}  onClick={() => swiper.slideTo(0,200)}>
       <TiMinus className={`${iconStyles}`}  />
    </button>
  
    </div>
  )
}

export default SwiperNavButtons
