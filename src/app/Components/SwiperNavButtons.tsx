'use client'
import { TiMinus, TiMinusOutline } from "react-icons/ti";
//import React from 'react'
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
   const swiper = useSwiper();
  return (
    <div className={`${containerStyles}`} >
    <button  className={`${btnStyles}`}  onClick={() => swiper.slideTo(0,200)}>
       <TiMinus className={`${iconStyles}`}  />
    </button>
    <button  className={`${btnStyles}`}   onClick={() => swiper.slideTo(1,200)}>
       <TiMinus className={`${iconStyles}`} />
    </button>
    <button  className={`${btnStyles}`}  onClick={() => swiper.slideTo(2,200)}>
       <TiMinus className={`${iconStyles}`}  />
    </button>
  
    </div>
  )
}

export default SwiperNavButtons
