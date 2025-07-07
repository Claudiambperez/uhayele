'use client'

//COMPONENT
import HeroSlider from '@/app/Components/HeroSlider'
//BACKGROUND
import { assets } from '@/app/assets/images'

const Hero = () => {
  return (
    <section className=" top  h-[80vh] lg:h-[912px]   bg-cover bg-no-repeat px-40  " id="home"  
    style={{
      backgroundImage: `url(${assets.bgHero.src})`,
      marginTop: 98,
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
