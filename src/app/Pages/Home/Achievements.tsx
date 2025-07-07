'use client'

//DEPENDENCY
import CountUp from "react-countup";

//ANIMATION
import { motion, useInView } from "framer-motion";

//REACT HOOKS
import { useRef } from "react";
import { data } from "@/app/assets/data";

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <section  className="pt-2  pb-14  " >
    <div className=" container mx-auto">
      <motion.div
       variants={data.assetsContentVariant}
       initial = 'hidden'
       whileInView = {'show'}
       viewport={{ once: false, amount: 0.3 }}

      className=" grid grid-cols-2 md:grid-cols-4 gap-20 ">
        {
            data.achievementsData.map((item, index)=> 
            { 
                return (
                <motion.div

                variants={data.assetsItem}
                    className=" flex flex-col justify-center items-center  "
                    key={index}>
                        {/*circle outer  */}
                        <div className="  animate-pulse  mb-6">
                             {/*circle inner  */}
                     <div
                     ref={ref}
                     className="  w-full flex 
                      items-center justify-center text-quar text-2xl
                     ">
                        {
                            /* render the CountUp animation only the component is in view
                              (isInView is true)
                            */
                          
                        }
                        {
                            isInView && (
                                <CountUp end={item.number} duration={6}  />
                            )
                        }
                 
                     </div>
                  
                       {/* icon    text  */}
                       <div className=" flex mt-4  flex-col justify-center items-center text-center">
                       
                         <h4 className=" h6 text-quar  font-light">{item.title} </h4>
                       </div>
                            </div>
                         </motion.div>) 
            }
            )
        }
      </motion.div>
      </div>
    </section>
  )
}

export default Achievements
