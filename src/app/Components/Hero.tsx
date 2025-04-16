//import React from 'react'

import HeroSlider from "./HeroSlider"
import bg from '../../../public/herobg4.jpg'

const Hero = () => {

  return (
    <section className=" h-[80vh] lg:h-[912px] bg-white  bg-cover bg-no-repeat px-40  " id="home"  
    style={{
      backgroundImage: `url(${bg.src})`,
      marginTop: 124,
      height: 600,
      width: 'auto' ,

    }}    
    >
      <div className="container mx-auto   h-full ">
        {/*hero slider*/}
        <HeroSlider />
      </div>
    </section>
  )
}

export default Hero
