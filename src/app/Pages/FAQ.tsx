'use client'
import React from 'react'
import { assets } from '../assets/images'
import Image, { StaticImageData } from 'next/image'
import RotatingText from '@/hooks/RotatingText'
import Button from '../Components/Button'
import { AiFillPlayCircle } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { GiHospitalCross } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import TestimonialModal from '../Components/TestimonialModal'
import { peopleUrl, services } from '../../../constants'
import About from './About'
import ServiceList from './Services/ServiceList'


//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import Doctors from './Doctors/Doctors'
import FaqList from './FAQs'
import Link from 'next/link'

type facilitiesProps = {
  backgroundImage: string | StaticImageData;
  title: string;
  subtitle: string;
  facilities: string;
  icon?: React.ElementType;
}

const EspecialitiesSite = ({backgroundImage, title, subtitle, facilities , icon: Icon} : facilitiesProps) => {
   return (
     <div className={` h-full w-full min-w-[600px]  xl:min-w-[800px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-4xl 2xl:rounded-4xl`} >
      <div className='flex h-full  flex-col items-start  justify-between p-6 lg:px-20 lg:py-10 '>
       <div className='flexCenter opacity-85 bg-ter gap-4 w-60 rounded-full   '>
        <div className=' p-4'> 
            {Icon && <Icon  className='text-sex bold-1 w-4 h-4' />} 
            
        </div>
        <div className='flex flex-col gap-1'>
           <h4 className='bold-1 text-white text-shadow-2xs '>{title}</h4>
           <p className='regular-14 text-white text-shadow-2xs'>{subtitle}</p>
        </div>
       </div>
             <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
           { peopleUrl.map((img,index) => (
              <Image
                 className=' inline-block h-10 w-10 rounded-full border-2 border-ter'
                 src= {img.img}   
                 key={index}
                 alt='person' 
                 width={52}
                 height={52}  

                 />
              
           ) )

           }
          </span>
            <h2 className='bold-1 text-shadow-2xs uppercase text-transparent  opacity-75 '>{facilities} </h2>
        </div>
      </div>
     </div>
   )
}
const TEST = () => {
  return (
    <>
    {/*----------------------- HERO SECTION -------------------------------*/}
    <section className='max-container padding-container  flex flex-col     md:gap-28 lg:py-20 xl:flex-row  ' >
        {/*LEFT*/}                                                
     <div className='relative z-20 flex flex-1 gap-4 flex-col xl:w-1/2 '>
      <Image
      src={assets.sthetoscope}
      alt='stethoscope'  
      className='absolute  top-[-30px] w-18 h-18 lg:w-[50px] left-[-5px] '
      />     
  
  <h1 className='bold-52 lg:bold-88   text-sex   '> A Uhayele proporciona  
 <RotatingText
  texts={['melhor conforto.', 'melhor conforto.', 'melhor cuidado.', 'melhor estabilidade.']}
  mainClassName="px-2 sm:px-2   md:px-3 text-sex overflow-hidden py-0.5 sm:py-2 md:py-2 "
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
</h1>
<div className='flex flex-col gap-4'> {/* Wrap the paragraph in a div */}
          <p className='regular-16 text-justify text-gray-500 xl:max-w-[520px]'>
            Queremos acompanhar o seu bem-estar, por isso, oferecemos consultas médicas online,
            onde pode falar com um médico, psicólogo ou nutricionista, sem sair de casa.
          </p>
             <div className='my-11 gap-4 flex flex-wrap'>
        <div className='flex items-center gap-2'>
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
        </div>
        <TestimonialModal />
       </div>
       <div className='flex flex-col w-full gap-4  sm:flex-row'>
    <Button
     type='button'
     title='Download App'
     variant ='bg-ter text-white rounded-full h-12 w-full gap-2 hover:bg-ter-dark transition-all sm:w-38 sm:h-12 '
    />
    <Button
     type='button'
     title='Como trabalhamos?'
     icon= {AiFillPlayCircle}
     variant =' border-white text-ter rounded-full h-12 w-full gap-2 hover:bg-ter-dark transition-all sm:w-46 sm:h-12'
    />
       </div>
        </div>
     
       </div>
        {/*RIGHT*/}
       <div className='relative flex flex-1  items-start'>
         <iframe width="600" height="425" src="https://www.youtube.com/embed/mYtggWjZ0p0?si=kDmZcSDYWAgvAJA7&amp;controls=0" 
         title="YouTube video player"
      /*   frameborder="0"*/
         allow="accelerometer; 
         autoplay; clipboard-write;
         encrypted-media; gyroscope;
         picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen
         className='rounded-lg shadow-lg' 
         >

         </iframe>
        
        </div>
                                            
    </section>
    {/*---------------------------- HERO END -------------------------------*/}
  
    {/*------------------ FACILITIES SECTION -------------------------------*/}
    <section className="relative max-container  lg:px-20  flex flex-col py-10 lg:mb-10 lg:py-14  ">
     <div className="hide-scrollbar flex h-[340px] w-full items-start  justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[420px] ">
       < EspecialitiesSite 
        backgroundImage = 'bg-facilitie1'
        title = 'Farmácias'
        subtitle ='Meditex, Maianga'
        facilities= '4+ aderiram'
        icon={GiHospitalCross}
       /> 
         < EspecialitiesSite 
        backgroundImage = 'bg-facilitie2'
        title = 'Laboratórios'
        subtitle ='Aliva, Cligest'
        facilities= '8+ consultadas'
        icon={ImLab}
       /> 
         < EspecialitiesSite 
        backgroundImage = 'bg-facilitie3'
        title = 'Exames'
        subtitle ='Centro Oncológico'
        facilities= '10+ examinados'
        icon={FiFileText}
       /> 
       
     </div>
      <div className='flexEnd mt-10 px-6 lg:-mt-40 lg:mr-6'>
       <div className=' bg-ter opacity-88 shadow-lg   p-8 lg:max-w-[500px] xl:max-w-[464px] xl:rounded-5xl xl:px-12 xl:py-18 relative w-full overflow-hidden rounded-3xl'>
         <h2 className=' regular-24 md:regular-32 xl:regular-64 capitalize text-white'>
          <strong > Está sentindo-se mal</strong> e sem conseguir sair de casa?
         </h2>
         <p className='regular-14 xl:regular-16 mt-5  text-white text-justify'>
            Providenciamos os melhores serviços.
           Atendimento personalizado para todos. Nosso sistema oferece 
           um serviço inquestionável de saúde.
         </p>
         <Image
          src={assets.quote}
          alt='quote'
          width={186}
          height={219}
          className='absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0'
          />

       </div>
      </div>
     </section>
     {/*--------------------- FACILITIES END   --------------------*/}

     {/*--------------------- ABOUT SECTION    --------------------*/}
      <About />
     {/*--------------------- ABOUT END        --------------------*/}


     {/*--------------------- SERVICES SECTION --------------------*/}
     <section className='flex-col flexCenter 
      overflow-hidden py-4'>
        <div className='max-container padding-container flex relative w-full
        justify-end'>
         <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className="relative px-6 ">
            <Image
            src={assets.sthetoscope}
            alt='stethoscope'
            width={50}
            height={50}
            className='absolute left-[11px] top-[-28px] w-10 lg:w-[50px] '
            />
            <h2 className='bold-40 lg:bold-64 text-sex'>
             NOSSOS Serviços
            </h2>
          </div>
          <ul className='py-4'>
            <ServiceList services={services} />  
          </ul>
         </div>
         <div className='flex flex-1 lg:min-h-[580px] justify-center '>
          <Image
           src={assets.phone}
           alt='phone'
           width={400}
           height={1040}
           className='absolute top-[32%] z-10 hidden md:-right-16 lg:flex lg:right-50 '
           />
         </div>
        </div>

     </section>
     {/*--------------------- SERVICES END     --------------------*/}

     {/*--------------------- DOCTORS SECTION  --------------------*/}
   {     <section className='max-container padding-container  flex flex-col  py-12  items-center '>
             <h2 className='bold-40 lg:bold-64 text-sex text-center'>
                OS NOSSOS DOCTORES
              </h2>
               <p className='regular-16 text-center text-gray-500'>Atendimento de classe para todos. Nossos sistema  oferece um cuidado incomparável. </p>
        
          <Doctors />
           <Link  href='/doctors' className='pt-8'>
                 <Button
                 type='button'
                 title='Saber mais'
                 variant ='bg-sex text-white rounded-full h-12 w-full  gap-2 hover:bg-ter-dark transition-all sm:w-38 sm:h-12 '
                 />
                </Link>
      </section>} 
     {/*--------------------- DOCTORS END      --------------------*/}

     {/*--------------------- FAQ SECTION      --------------------*/}
     <section className='flexCenter flex-col'>
      <div className=" padding-container max-container w-full py-12">
         <Image
            src={assets.sthetoscope}
            alt='stethoscope'
            width={50}
            height={50}
            />
            <p className=' uppercase regular-18 -mt-1 mb-3 text-sex'>
              Nós estamos aqui para si
            </p>
              
            <div className="flex  justify-between gap-5 lg:gap-16">
  
               <div className='w-1/2  hidden md:block'>
                         <h2 className='bold-32 lg:bold-36 xl:max-w-[690px]'>Questões frequentes feitas pelos nossos adorados pacientes</h2>
                <Image src={assets.faq} alt='' className='w-[260] h-[260] '/>
              </div>
              <div className='w-full md:w-1/2'>
              <FaqList/>  
              </div>
            
              
            </div>
      </div>
     </section>

     {/*--------------------- FAQ END          --------------------*/}
    </>
    
  )
}

export default TEST