'use client'

//ANIMATION
import { motion } from "framer-motion";
import { fadeIn } from "../../../../lib/variants";

//DATA
import { data } from "@/app/assets/data";
//ACHIEVEMENTS SECTION
import Achievements from "./Achievements";


const About = () => {
  return (
    <section   className="pt-8  pb-14  lg:pb-28 "  id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
              variants={fadeIn('up', 0.4)}
              initial = 'hidden'
              whileInView = {'show'}
              viewport={{ once: false, amount: 0.2 }}
          className="h2 text-prim text-center">
            SOBRE NÓS
          </motion.h2>
         
            <div className="flex flex-col lg:items-start   gap-14 mb-4 ">
           
                <motion.p 
                   variants={fadeIn('up', 0.6)}
                   initial = 'hidden'
                   whileInView = {'show'}
                   viewport={{ once: false, amount: 0.2 }}
                className=" h6  font-light text-quar  mt-2 max-w-[640px] mx-auto  italic  lg:text-justify *:mb-4">
                "Trabalharemos consigo para desenvolver planos de cuidados individualizados, 
                incluindo a gestão de doenças crónicas. Se não pudermos ajudar, podemos fornecer 
                referências ou aconselhamento sobre o tipo de profissional de que necessita. Tratamos 
                todos os pedidos de informação com sensibilidade e na mais estrita confidencialidade."
                </motion.p>
            </div>
             {/*Features*/}
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial = 'hidden'
              whileInView = {'show'}
              viewport={{ once: false, amount: 0.2 }}
            className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2  justify-center  ">
              {data.featured.map((feature, index) => {

              return (
              <div  className=" flex flex-col  justify-center items-center gap-4    p-10 "  key={index}>
               <div>
                   {feature.img}
               </div>
               <div className=" flex flex-col justify-center  items-center gap-2 text-justify  ">
                <p className=" border-ter  border-1 w-62  opacity-30"></p>
                <p className="text-quar font-light">{feature.title} </p>
                </div>
            
              </div>

              )

              })

              }

            </motion.div>
              {/*Achievements*/}
                   <Achievements />

           </div>
      </div>
    </section >
  )
}

export default About
