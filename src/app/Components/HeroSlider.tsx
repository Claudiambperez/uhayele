'use client'
//import swiper react components
import { Swiper, SwiperSlide} from "swiper/react"
import  {Autoplay } from "swiper/modules" // Import Autoplay module
//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//components
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const HeroSlider = () => {
 
  return (
    <Swiper className=" h-full"
    modules={[Autoplay]} // Add Autoplay module here
    autoplay={{
      delay: 4500, // Delay between transitions in milliseconds
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    }}
    >
      <SwiperSlide > 
       <div  className=" h-full flex justify-start pt-10">
       <div className=" flex flex-col gap-5  items-start lg:items-start lg:max-w-[700px]">
            <motion.h1 
            variants={fadeIn('up', 0.4)}
            initial= 'hidden'
            whileInView= {'show'}
            viewport = {{once: false, amount: 0.2}}
            className=" flex flex-col   lg:items-start  mb-2">
            <span className=" h2 text-ter"> Poupe a viagem! Faça online as suas   </span> 
            <span className="h1 text-prim  ">Consultas EXTERNAS</span>
            </motion.h1 >

            <motion.p 
             variants={fadeIn('up', 0.6)}
             initial= 'hidden'
             whileInView= {'show'}
             viewport = {{once: false, amount: 0.2}}
            className="h4  font-light text-quar text-justify italic max-w-sm lg:text-justify mb-4">
            Ligue-se instantaneamente a um especialista 24 horas por dia, 7 dias por semana, ou opte por fazer  uma visita por vídeo a um determinado médico.
                </motion.p>
                <motion.div
                 variants={fadeIn('up', 0.8)}
                 initial= 'hidden'
                 whileInView= {'show'}
                 viewport = {{once: false, amount: 0.2}}
                >

                <CustomButton text="Consulte agora" containerStyles=" w-[196px] h-[62px] rounded-md" />
                </motion.div>
           
   </div>
       </div>
      </SwiperSlide>
      <SwiperSlide > 
       <div  className=" h-full flex justify-start pt-10">
       <div className=" flex flex-col gap-5  items-start lg:items-start lg:max-w-[700px]">
            <motion.h1 
             variants={fadeIn('up', 0.4)}
             initial= 'hidden'
             whileInView= {'show'}
             viewport = {{once: false, amount: 0.2}}
             className=" flex flex-col lg:items-start  mb-2">
            <span className=" h2 text-ter"> Não deixe para amanhã  </span> 
             <span className="h1 text-prim  "> A CONSULTA DE HOJE</span>
            </motion.h1>
           
              <motion.p 
                variants={fadeIn('up', 0.6)}
                initial= 'hidden'
                whileInView= {'show'}
                viewport = {{once: false, amount: 0.2}}
                className="h4  font-light text-quar text-justify italic max-w-sm lg:text-justify mb-4">
                Entre em contacto com um dos nossos especialistas para colocar o up no check da sua saúde.
              </motion.p>
              <motion.div
                 variants={fadeIn('up', 0.8)}
                 initial= 'hidden'
                 whileInView= {'show'}
                 viewport = {{once: false, amount: 0.2}}
                >

                <CustomButton text="Consulte agora" containerStyles=" w-[196px] h-[62px] rounded-md" />
                </motion.div>
   </div>
       </div>
      </SwiperSlide>
      <SwiperSlide > 
       <div  className=" h-full flex justify-start pt-10">
       <div className=" flex flex-col gap-5  items-start lg:item-end overflow-auto lg:max-w-[700px]">
       <motion.h1
          variants={fadeIn('up', 0.4)}
          initial= 'hidden'
          whileInView= {'show'}
          viewport = {{once: false, amount: 0.2}}
          className=" flex flex-col lg:items-start  mb-2">
            <span className=" h2 text-ter">  Deixe-nos cuidar de si </span> 
             <span className="h1 text-prim  ">   E DO SEU BEM-ESTAR</span>
            </motion.h1>
           
      
              <motion.p
                 variants={fadeIn('up', 0.6)}
                 initial= 'hidden'
                 whileInView= {'show'}
                 viewport = {{once: false, amount: 0.2}}
                className="h4  font-light text-quar text-right italic max-w-sm lg:text-justify mb-4">
               Estamos aqui a distância de uma chamada, mensagem ou video-chamada para monitorar seus exames.
              </motion.p>
              <motion.div
                 variants={fadeIn('up', 0.8)}
                 initial= 'hidden'
                 whileInView= {'show'}
                 viewport = {{once: false, amount: 0.2}}
                >

                <CustomButton text="Consulte agora" containerStyles=" w-[196px] h-[62px] rounded-md" />
                </motion.div>
   </div>
       </div>
      </SwiperSlide>
      {/* Swiper nav buttons*/}
      <SwiperNavButtons 
       containerStyles=" absolute bottom-2  lg:bottom-0  left-0 h-[120px] w-full
       lg:w-[700px] z-50 flex items-start  justify-end lg:justify-start gap-2"
       btnStyles=" cursor-pointer  w-[42px]  h-[42px] 
       flex justify-center 
       items-center 
       rounded-md
       relative  overflow-hidden bg-ter
       before:absolute before:inset-0 before:border-0 before:border-white 
       before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 
       hover:shadow-blue-600 hover:before:border-[25px]
          "
       iconStyles="relative z-10 text-2xl text-amber-300 "
      
      />
    </Swiper>
  )
}

export default HeroSlider
