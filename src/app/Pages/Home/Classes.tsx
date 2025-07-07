'use client'

//ANIMATION
import { motion } from "framer-motion"
import { fadeIn } from "../../../../lib/variants"

//CATEGORIES DATA
import { data } from "@/app/assets/data"

//BUTTON
import CustomButton from "@/app/Components/CustomButton"

const Classes = () => {
  return (
    <section className=" h-screen " id="class">
     <motion.div
        variants={fadeIn('up', 0.6)}
       initial = 'hidden'
       whileInView = {'show'}
       viewport={{ once: false, amount: 0.2 }}
     
     className="grid grid-cols-1 lg:grid-cols-3">
      {
        data.categories.map((item, index) => {
          return (
            <div className=" relative  w-full h-[300px] lg:h-[308px] flex flex-col 
              justify-center items-center
            "
            key={index}
            >
              {/*overlay */}
              <div className=" bg-black/50 absolute w-full h-full top-0 z-10"></div>
             {item.img}
             {/*text & BTN*/}
             <div className=" z-30  max-w-[360px] text-center flex flex-col 
             items-center justify-center  gap-4 p-4">

             <motion.h3
                variants={fadeIn('up', 0.4)}
                initial = 'hidden'
                whileInView = {'show'}
                viewport={{ once: false, amount: 0.2 }}
             className="h4 text-sex">
              {item.name} 
              </motion.h3>
             <motion.p 
                variants={fadeIn('up', 0.6)}
                initial = 'hidden'
                whileInView = {'show'}
                viewport={{ once: false, amount: 0.2 }}
     
             className=" text-white">{item.description} </motion.p>
              <motion.div
                 variants={fadeIn('up', 0.8)}
                 initial = 'hidden'
                 whileInView = {'show'}
                 viewport={{ once: false, amount: 0.2 }}
     
              >
  <CustomButton 
              containerStyles="w-[164px] h-[46px] rounded-md"
              text="Saber mais"
              />
             </motion.div>
             </div>
            
           
              </div>
          )
        })
      }
     </motion.div>
    </section>
  )
}

export default Classes

