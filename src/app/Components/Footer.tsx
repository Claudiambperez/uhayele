'use client'
import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/rblogo.png'
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebook, 
  FaTwitter, 
  FaYoutube,
} from "react-icons/fa"

import CustomButton from "./CustomButton"
import { RiUserCommunityLine } from "react-icons/ri"
import { Link as ScrollLink } from "react-scroll"

const footerLinks = [
 { name: 'home', target: 'home'},
 { name: 'about', target: 'about'},
 { name: 'class', target: 'class'},
 { name: 'team', target: 'team'},
 { name: 'testimonial', target: 'testimonial' },
]

const Footer = () => {
  return (
    <footer className="pt-8 pb-4 footer"> {/* Reduced padding */}
      <div className="container mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
        <div className="text-four grid grid-cols-1 xl:grid-cols-4 gap-6 mb-2"> {/* Reduced gap */}
          {/* Info */}
          <div className="flex flex-col gap-4"> {/* Reduced gap */}
           <Link href='#'>
             <Image
              src={logo}
              width={117}
              height={65}
              alt="logo"
             />
           </Link>
           <p className="max-w-sm text-fifth font-extrabold leading-snug">Uhayele - o ecossistema que prioriza sua saúde e bem-estar primeiro.</p>
           <ul className="flex flex-col gap-2"> {/* Reduced gap */}
            <Link className="flex items-center gap-2 text-fifth font-extrabold leading-snug" href='https://chat.whatsapp.com/BQWThupWvWJLxhTAwZYIQS'>
              <RiUserCommunityLine className="text-2xl" /> {/* Reduced icon size */}
              <span>Junte-se a Comunidade</span> 
            </Link>
            <Link className="flex items-center gap-2 text-fifth font-extrabold leading-snug" href=''>
              <FaPhoneAlt className="text-lg" /> {/* Reduced icon size */}
              <span>(244) 955-619-905</span> 
            </Link>
            <Link className="flex items-center gap-2 text-fifth font-extrabold leading-snug" href=''>
              <FaEnvelope className="text-lg" /> {/* Reduced icon size */}
              <span>uhayele@gmail.co.ao</span> 
            </Link>
           </ul>
          </div>
          {/* Blog */}
          <div className="pt-2 flex flex-col gap-1"> {/* Reduced padding and gap */}
            <h4 className="h4 text-quar mb-4">Publicações recentes</h4>
            {/* Post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-2 pb-2 mb-2"> {/* Reduced gap and padding */}
              <Link className="cursor-pointer hover:text-purple-900 transition-all" href='https://www.news-medical.net/news/20250425/Telehealth-in-pediatric-primary-care-linked-to-responsible-antibiotic-use.aspx'>
                <h5 className="text-sm leading-snug">Telessaúde na atenção primária pediátrica</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">April 25, 2025</p>
              </Link>
            </div>
              {/*post*/}
          <div className=" border-b border-dotted  border-gray-400 flex flex-col 
          gap-2 pb-2 mb-2" >
              <Link
               className=" cursor-pointer  hover:text-purple-900  transition-all"
               href='https://www.news-medical.net/news/20250409/Rural-hospitals-and-patients-are-disconnected-from-modern-care.aspx'  
               >
              <h5 className="text-sm leading-snug">
               Os hospitais rurais estão desconectados da tecnologia
              </h5>
             <p className=" text-gray-400  text-[12px]  tracking-[3px] uppercase">April 9, 2025 </p>
              </Link>
          </div>
           {/*post*/}
          <div className=" flex flex-col 
          gap-3 pb-3 mb-4" >
              <Link
               className=" cursor-pointer  hover:text-purple-900  transition-all"
               href='https://www.news-medical.net/news/20250425/Telehealth-in-pediatric-primary-care-linked-to-responsible-antibiotic-use.aspx'  
               >
              <h5 className="text-sm leading-snug">
               

                Teledermoscopia oferece diagnóstico do cancro da pele
              </h5>
             <p className=" text-gray-400  text-[12px]  tracking-[3px] uppercase">November  14, 2024 </p>
              </Link>
          </div>
          </div>
          {/* Links */}
          <div className="pt-2">
            <h4 className="h4 text-quar leading-snug mb-4">Uhayele</h4>
            <ul className="flex flex-col gap-4 transition-all duration-500">
              {footerLinks.map((link, index) => (
                <li key={index} className={`flex flex-col gap-2 pb-2 mb-1 text-sm text-fifth leading-snug uppercase font-extrabold ${index < footerLinks.length - 1 ? 'border-b border-dotted border-gray-500' : ''}`}>
                  <ScrollLink
                    to={link.target}
                    smooth
                    spy
                    activeClass='active'
                    className="cursor-pointer hover:text-prim transition-all"
                    onClick={() => console.log(`Navigating to ${link.target}`)} // Debugging log
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter */}
          <div className="pt-2">
            <h4 className="h4 text-quar leading-snug mb-4">Newsletter</h4>
            <div className="flex flex-col gap-2">
              <p className="text-justify">
                Estamos empolgados em anunciar que em breve 
                lançaremos nossa newsletter! Se deseja estar alerta e combater as doenças, não perca a oportunidade de se inscrever!
              </p>
              <form action="" className="flex  flex-col items-start gap-2">
                <input
                  type="text" 
                  placeholder="Seu endereço de e-mail"
                  className="h-[40px] bg-white outline-none px-4 rounded-md text-fifth" // Reduced height
                />
                <CustomButton containerStyles="h-[40px] rounded-md px-8" text="Enviar" /> {/* Reduced height */}
              </form>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-fifth border-t border-dotted">
          <div className="container mx-auto h-full flex items-center justify-center pt-2">
            <div>
              <span>&copy; Copyright 2024 CpDevelopment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
