'use client'

//ANIMATION
import { motion } from "framer-motion"
import { fadeIn } from "../../../../lib/variants"

//ICON
import { FaQuoteLeft } from "react-icons/fa"

//swiper
import { Swiper, SwiperSlide} from "swiper/react"

//modules
import  {Autoplay } from "swiper/modules" // Import Autoplay module

//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//DEPENDENCY
import Image from "next/image"
import { data } from "@/app/assets/data"



const Testimonial = () => {
  return (
    <section className=" py-12 xl:py-28" id="testimonial"
    >
      <div className=" container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
       
        <div  className="w-full lg:w-2/5">
         <motion.p
                 variants={fadeIn('up', 0.6)}
                 initial = 'hidden'
                 whileInView = {'show'}
                 viewport={{ once: false, amount: 0.2 }}
                 className=" text-2xl text-ter font-medium mb-4 block">
                  Testemunhos
            </motion.p>
            <motion.h2
                 variants={fadeIn('up', 0.4)}
                 initial = 'hidden'
                 whileInView = {'show'}
                 viewport={{ once: false, amount: 0.2 }}
                 className=" text-4xl font-bold text-four leading-[3.25rem] mb-8">
                2k+ Pacientes deram seu <span
                             className=" text-transparent bg-clip-text bg-gradient-to-tr  text-ter">Feedback</span>
            </motion.h2>
                
                
                   
                
                    </div>
                      <motion.div
                       variants={fadeIn('up', 0.8)}
                 initial = 'hidden'
                 whileInView = {'show'}
                 viewport={{ once: false, amount: 0.2 }}
                      className="w-full lg:w-3/5">
              <Swiper
                 slidesPerView={1}
                 spaceBetween={30}
                 modules={[Autoplay]} // Add Autoplay module here
                 autoplay={{
                   delay: 4500, // Delay between transitions in milliseconds
                   disableOnInteraction: false, // Autoplay will not be disabled after user interactions
                         }}
                 breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  }
                 }}
                >
                    {data.testimonialData.map((person, index) => {
                   return <SwiperSlide className=" h-full group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-4 transition-all duration-500 hover:border-indigo-600" key={index}> 
                    <div className=" flex flex-col justify-center items-center gap-6 text-center h-full" >
                      <Image
                      src={person.img}
                      width={90}
                      height={90}
                       alt=""
                       className="' rounded-full object-cover"
                      />
                      <div className=" flex flex-col justify-center items-center">
                      <FaQuoteLeft className=" text-2xl text-ter" />
                      <p className=" max-w-[380px] text-justify pb-4"> {person.message}</p>
                      <span className=" text-2xl text-ter">
                        {person.name}
                      </span>
                      </div>
                    </div>
                   </SwiperSlide>
                                      
                  })

                  }
             </Swiper>  
                
                </motion.div>
               
                </div>
                
        </div>
     
      
    </section> 
  )
}

export default Testimonial 