'use client'

//ANIMATION
//import { motion } from "framer-motion";
//import { fadeIn } from "../../../lib/variants";

//DATA

//ACHIEVEMENTS SECTION

import { assets } from "@/app/assets/images";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import Button from "@/app/Components/Button";


const About = () => {
  return (
      <section className=" max-container  lg:px-20  flex flex-col py-10 lg:mb-10 lg:py-14   ">
      
          <div className=" flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
               {/* Image*/}
               <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                 <div className="flex justify-center   ">
                 <Image
                 src={assets.gif}
                 alt='Dra Adis'  
                 className=" rounded-2xl w-[300px] h-[300px] "
                 unoptimized
                 />
                  <div className=" absolute z-20 w-[200px]  top-60 md:w-[300px]  right-[-10%] md:right-[-7%]
                   lg:bottom-28 lg:right-[12%]  ">
                   <div className="bg-gray-200 flex flex-col gap-2 rounded-2xl shadow-md shadow-gray-500 h-22 w-48 overflow-hidden">
                     <div className="flex gap-1 bg-white shadow-xs px-4 opacity-65 py-1" >
                      <FaCircle className=" text-red-700 h-3 w-3 " /> 
                      <FaCircle className=" text-yellow-400 h-3 w-3" /> 
                      <FaCircle className=" text-green-600 h-3 w-3" /> 
                     </div>
                  
                    
                     <div className='flexCenter gap-4'>
                      <div className='rounded-full bg-sex  ring-2 ring-gray-500/50  p-2'> 
                      
                      </div>
                    <div className='flex flex-col gap-0.5'>
                       <div className="flex gap-2  opacity-25">
                       <span className="h-1 w-4 rounded-md bg-gray-500" />
                       <span className="h-1 w-6 rounded-md bg-gray-500" />
                     </div>
                     <h4 className='bold-1 text-gray-400 text-shadow-2xs '> Dr. Lois Mitchell  </h4>
                    <p className='regular-14 text-gray-400 text-shadow-2xs'> Dermatologista </p>
                    </div>
                   </div>
                     
                   </div>
                 </div>
                 </div>
               
                
               </div>

               {/*Content*/}
               <div className="flex flex-col gap-6  w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
               <h2 className="bold-32 text-sex leading-2 px-6"> Orgulhosos em inovar o atendimento hospitalar personalizado.  </h2>
                <div className="py-2 flex gap-6 flex-col px-6">
                  <p  className=" bold-1 leading-8  text-gray-500 text-justify ">
                   Trabalharemos consigo para desenvolver planos de cuidados individualizados, 
                incluindo a gestão de doenças crónicas. Se não pudermos ajudar, podemos fornecer 
                referências ou aconselhamento sobre o tipo de profissional de que necessita. Tratamos 
                todos os pedidos de informação com sensibilidade e na mais estrita confidencialidade.
               </p>
               
                 <p  className=" bold-1 leading-8  text-gray-500 text-justify ">
                  Estamos aqui para como um ecossistema com principios primordiais
               </p>
               
                <Link  href='/'>
                 <Button
                 type='button'
                 title='Saber mais'
                 variant ='bg-sex text-white rounded-full h-12 w-full gap-2 hover:bg-ter-dark transition-all sm:w-38 sm:h-12 '
                 />
                </Link>
                </div>
              

               </div>
         
        </div>
      </section>
  )
}

export default About
