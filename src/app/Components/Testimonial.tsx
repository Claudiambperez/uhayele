//import React from 'react'

//swiper
import { Swiper, SwiperSlide} from "swiper/react"

//modules
import  {Autoplay, Pagination} from "swiper/modules" // Import Autoplay module

//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//DEPENDENCY
import Image, {StaticImageData } from "next/image"

//TYPE
type TestimonialProps = {
  name: string;
  title: string;
  message: string;
  img: string | StaticImageData;
}     

type TestimonialData = TestimonialProps[];

const Testimonial = ({ testimonial }: { testimonial: TestimonialData }) => {
  return (
    <div>
         <Swiper
                         slidesPerView={1}
                         spaceBetween={30}
                         modules={[Autoplay ,Pagination]} // Add Autoplay module here
                         autoplay={{
                           delay: 4500, // Delay between transitions in milliseconds
                           disableOnInteraction: false, // Autoplay will not be disabled after user interactions
                                 }}
                          pagination={{
                            dynamicBullets: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                            type: 'bullets',
                                }}
                         breakpoints={{
                          768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                          },
                          1024: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                          }
                         }}
                        >
                            {testimonial.map((person, index) => {
                           return <SwiperSlide className="duration-300 ease-in-out  " key={index}> 
                                    <div className="flex duration-300 ease-in-out ">
                                      <div className="testimonial">
                                       <div className="flex flex-1 flex-col">
                                        <p className="quote text-justify">{person.message} </p>  
                                         <div className="author">
                                        <div className="author-avatar">
                                         <Image
                                          src={person.img}  
                                            width={50}          
                                            height={50}
                                            alt=""
                                            className="w-full h-full object-cover"
                                            />  
                                        </div>
                                        <div className="author-info">
                                          <h4 className="author-name">{person.name}</h4>
                                          <span className="author-title">{person.title}</span>
                                          </div>
                                         </div>                    
                                       </div>
                                      </div>
                                    </div>
                          
                           </SwiperSlide>
                                              
                          })
        
                          }
                     </Swiper>  
                        
      
    </div>
  )
}


export default Testimonial
