import React from 'react'

import Image from 'next/image'
import { assets } from '@/app/assets/images'
import { BsArrowRight } from 'react-icons/bs'
import { BiSolidStar } from "react-icons/bi";
import Link from 'next/link'
import { DOCTOR, doctors } from '../../../../constants'

  
const DoctorDetails: React.FC<{doctor : DOCTOR}> = ({  doctor  }) => {
    const { image, alt,  name,  role,social,    avgRating,  totalRating, totalPatients }= doctor
  return (
    <div className= 'rounded-2xl bg-base-100  backdrop-blur-[16px] lg: w-[340px]  lg:h-[390px] shadow-md' >   
 <figure className='overflow-hidden rounded-t-2xl'>
        <Image
        src={image}
        alt={alt}
        className ='w-full '
        />
      </figure>
        <div className="card-body">
         <div className="card-title ">
          <div className=' flex items-center gap-11'>
              <h2 className=' text-[18px] text-center leading-8 lg:text-[20px] lg:leading-9 text-gray-500 bold-16  '>
        {name}
      </h2>
         <span className='flex items-center gap-2 text-[14px] leading-4   font-semibold text-gray-500 '>
             <BiSolidStar
            className='text-sex h-4'
           />
           {avgRating}
            <span className='text-[12px] leading-4  font-[400] text-sex'>
          
             ({totalRating})
            </span>
              </span>
               
           
        </div>
          
    </div>
      <div className='mt-1 flex items-center  gap-4'>
        <span className='bg-sex opacity-55 text-gray-500 px-4  w-full text-[12px] leading-7 rounded font-semibold '> {role} </span>
          
      </div>
   
    <div className="card-actions   mt-[10px]">
               <Link
         href='/doctors'
         className="w-full h-[30px] rounded-full border border-solid border-[#B1A1C5]
         text-ter
         mx-auto flex items-center justify-center group  
         hover:bg-[#B1A1C5] hover:border-none hover:text-white" >
          Agendar
          <BsArrowRight className=" group-hover:text-white w-6 h-4" />
         </Link>
      
    </div>
      </div>
    </div>
  )
}

export default DoctorDetails
