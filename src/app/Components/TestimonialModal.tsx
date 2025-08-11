'use client'

import  { useState } from 'react'
//DEPENDENCY
import Image from 'next/image'
import Link from 'next/link';
//ICONS
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { PiMinusBold } from "react-icons/pi";
import { LuArrowDownFromLine } from "react-icons/lu";
//ASSETS
import { assets } from '../assets/images'
//COMPONENTS
import Testimonial from './Testimonial'
import Button from './Button';
//CONSTANTS
import { testimonialModal } from '../../../constants'





const TestimonialModal = () => {
  return (
    <div>
       <p  className='flex gap-1 bold-16 lg:bold-20 text-gray-900'>
         40 
         <label className='regular-16 lg:regular-20  text-gray-500 underline link-1' htmlFor="my_modal_7">
          Pacientes satisfeitos
          </label>  
       </p>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
       <div className="modal" role="dialog">
        <div className="modal-box hide-scrollbar h-[442] max-w-2xl p-0">
         <div className="modal-header flex flex-col  ">
          <h3 className="font-bold text-lg ">Testemunhos</h3>
            <p className=' font-light text-sec'> Junte-se a Comunidade Uhayele e coloque o seu bem-estar em primeiro lugar.</p>
             <div className="flex items-center gap-4 justify-center ">
              <div className=' flex items-center gap-2'>
                        {Array(5).fill(1).map((_, index) => (
                          <Image 
                          src={ assets.star }
                          key={index}
                          alt='star'
                          width={24}
                          height={24}
                          />
                        ))
                        }    
                          <span className="bold-16 text-white">4.9</span>
                      </div>
               <div className="flex items-center text-sec gap-1">
              <LiaLongArrowAltDownSolid className='h-12' />
              <span className='text-base'>20+</span>
            </div>
          </div>
      <label htmlFor="my_modal_7" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>

    </div>
    
  <Testimonial testimonial={testimonialModal} />
   <div className="swipe-indicator">
                                       <span>Deslize</span>
                                       <span className="swipe-icon">⟷</span>
                                        <span>para mais</span>
                                        </div>
        <div className='flex justify-end  pb-2 '>
<Button
          type='button' 
          title='Ver mais'
          variant=' border-none text-sec underline   pr-8   cursor-pointer transition-all  '
          />     
  
       
    </div>
  
         
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
       
  
    </div>
  )
}

export default TestimonialModal
