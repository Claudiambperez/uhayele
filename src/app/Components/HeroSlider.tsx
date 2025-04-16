'use client'
//import swiper react components
import { Swiper, SwiperSlide} from "swiper/react"
//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//components
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
//import {Button} from "@heroui/react";

const HeroSlider = () => {
 
  return (
    <Swiper className=" h-full">
      <SwiperSlide > 
       <div  className=" h-full flex justify-start pt-10">
       <div className=" flex flex-col gap-5  items-start lg:items-start lg:max-w-[700px]">
            <h3 className="h2 text-ter  lg:items-start  mb-2">
                Poupe a viagem! Faça online as suas
            </h3>
            <h2 className="h1 text-prim   lg:items-start mb-2">
            Consultas EXTERNAS
            </h2>
         
                <p className="h4  font-light text-quar text-justify italic max-w-sm lg:text-left mb-4">
                Ligue-se instantaneamente a um especialista 24 horas por dia, 7 dias por semana, ou opte por fazer  uma visita por vídeo a um determinado médico.
                </p>
            <CustomButton text="Consulte agora" containerStyles=" w-[196px] h-[62px] " />
   </div>
       </div>
      </SwiperSlide>
      <SwiperSlide > 
       <div  className=" h-full flex justify-start pt-10">
       <div className=" flex flex-col gap-5  items-start lg:items-start lg:max-w-[700px]">
            <h3 className="h2 text-ter  lg:items-start  mb-2">
               Não deixe para amanhã
            </h3>
            <h2 className="h1 text-prim   lg:items-start mb-2">
            A CONSULTA DE HOJE
            </h2>
         
                <p className="h4  font-light text-quar text-justify italic max-w-sm lg:text-left mb-4">
                Entre em contacto com um dos nossos especialistas para colocar o up no check da sua saúde.
                </p>
            <CustomButton text="Consulte agora" containerStyles=" w-[196px] h-[62px] " />
   </div>
       </div>
      </SwiperSlide>
      <SwiperSlide > 
       <div  className=" h-full flex justify-start pt-10">
       <div className=" flex flex-col gap-5  items-start lg:items-start lg:max-w-[700px]">
            <h3 className="h2 text-ter  lg:items-start  mb-2">
              Deixe-nos cuidar de si
            </h3>
            <h2 className="h1 text-prim   lg:items-start mb-2">
           E DO SEU BEM-ESTAR
            </h2>
         
                <p className="h4  font-light text-quar text-justify italic max-w-sm lg:text-left mb-4">
               Estamos aqui a distância de uma chamada, mensagem ou video-chamada para monitorar seus exames.
                </p>
            <CustomButton text="Consulte agora" containerStyles=" w-[190px] h-[62px] " />
   </div>
       </div>
      </SwiperSlide>
      {/* Swiper nav buttons*/}
      <SwiperNavButtons 
       containerStyles=" absolute bottom-2  lg:bottom-0  h-[120px] w-full
       lg:w-[700px] z-50 flex items-start  justify-start lg:justify-start gap-2"
       btnStyles=" cursor-pointer  bg-ter  w-[42px]  h-[42px] 
       flex justify-center 
       items-center 
        transition-all duration-300
        before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl 
        before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right
         before:-translate-x-full before:translate-y-12 
        before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300
         hover:text-white hover:shadow-black hover:before:-rotate-180"
       iconStyles=" ease relative text-2xl text-amber-300 transition duration-300"
      
      />
    </Swiper>
  )
}

export default HeroSlider
