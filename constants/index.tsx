//ASSETS
import { assets } from "@/app/assets/images" 

//ICONS 
import { PiToothThin } from "react-icons/pi";
import { LiaFileMedicalAltSolid } from "react-icons/lia"
import { PiHandHeartThin } from "react-icons/pi";
import { TbEyeSearch } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { GiMedicalDrip } from "react-icons/gi";
import { SiLinkedin, SiYoutube } from "react-icons/si";
import { RiLinkedinFill, RiTwitterXLine } from "react-icons/ri";
import { AiFillYoutube, AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

//DEPENDENCY
import  { StaticImageData }  from 'next/image';





//NAVIGATION
export const NAV_LINKS = [
  { href: "/",key:'home' ,  label: 'Home' },
  { href: "/doctors",key:'doctors' ,  label: 'Procurar médico' },
  { href: "/servicos",key:'servicos' ,  label: 'Serviços' },
  { href: "/contact",key:'contact' ,  label: 'Contactos' },
]



//TESTIMONIAL MODAl
export const testimonialModal =[
{ img: assets.person_1 ,
  message: 'A Uhayele como profissional de saúde, é uma plataforma que me permite oferecer consultas médicas online de forma fácil e eficiente. A interface é intuitiva e os pacientes podem agendar consultas com facilidade.',
  name: 'Marina Cogle',
  title: 'Médica',
},
{ img: assets.person_2  ,
  message: 'A Uhayele permitiu-me tratar da minha saúde mental de forma discreta e conveniente. As consultas online são confortáveis e os profissionais são muito atenciosos.',
  name: 'Lucia Barbon',
  title: 'Mãe de familia',
},
{ img: assets.person_3  ,
  message: 'A Uhayele é uma plataforma incrível que me permitiu ter acesso a cuidados médicos de qualidade sem sair de casa. Recomendo a todos!',
  name: 'Prisca Francia',
  title: 'Estudante',
},
                                   
]

//FACILITIES PEOPLE 
export const peopleUrl = [
  {img: assets.person_8,},
  {img: assets.person_4},
  {img: assets.person_7,},
  {img: assets.person_3},

]

//SERVICES SECTION
export const services = [
  {
    speciality: "Medicina Geral",
    desc: " O médico de cuidados primários é um profissional que presta cuidados de saúde abrangentes a pacientes de todas idades.",
    bgColor: "#B1A1C5",
    textColor: "#F1D886",
    icon: PiToothThin 
  },
  {
    speciality: "Ortopedia",
    desc: "A ortopedia é uma especialidade médica que faz o diagnóstico, tratamento e prevenção de lesões nas articulações, ligamentos, tendões.",
    bgColor: "#B1A1C5",
    textColor: "#F1D886",
    icon: LiaFileMedicalAltSolid 
  },
  {
    speciality: "Oftamologia",
    desc: "A oftalmologia é o ramo da medicina que lida com a anatomia, fisiologia e doenças dos olhos. Fornecer tratamento médico  .",
    bgColor: "#B1A1C5",
    textColor: "#F1D886",
    icon: PiHandHeartThin 
  },
  {
    speciality: "Medicina Interna",
    desc: "A medicina interna é uma especialidade focada na prevenção, diagnóstico e tratamento de doenças em adultos. ",
    bgColor: "#B1A1C5",
    textColor: "#F1D886",
    icon: TbEyeSearch
  },
  {
    speciality: "Dermatologia",
    desc: "A dermatologia é o ramo da medicina que se concentra no diagnóstico e tratamento de doenças da pele, cabelo e unhas. ",
    bgColor: "#B1A1C5",
    textColor: "#F1D886",
    icon:  GiBrain 
  },
  {
    speciality: "Cardiologia",
    desc: "A cardiologia é a área da medicina especializada no diagnóstico e tratamento de doenças cardíacas e vasculares.",
    bgColor: "#B1A1C5",
    textColor: "#F1D886",
    icon: GiMedicalDrip 
  },
];

//DOCTORS SECTION 


/*---------- TYPE -----------*/

//SOCIAL MEDIA 
export type SocialLink ={
  icon: React.ComponentType;
  href: string;
}

//DOCTOR
export type DOCTOR = {
  id: string ;
  image: string | StaticImageData ;
  name: string;
  speciality: string;
  experience: string;
  degree: string;
  about: string;
  fees: number;
  social: SocialLink[];
  avgRating : number;
  totalRating: number;
  totalPatients: number;
}


export const doctors = [
  { id: 'doc_1',
    image: assets.doctor_1,
    name: 'Dr. Killian Chipalavela',
    speciality: 'Medicina Geral',
    degree: 'MBBS',
    experience: '10 anos',
    about: ' Dr. Killian Chipalavela é um médico de família certificado com mais de 10 anos de experiência na prestação de cuidados de saúde abrangentes a pacientes de todas as idades.Dr. Chipalavela acredita numa abordagem centrada no paciente, com foco nos cuidados preventivos e na construção de relações duradouras com os seus pacientes.',
    fees: 15000,
    social: [
      { icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/' },
      { icon: RiTwitterXLine, href: 'http://twitter.com' },
      { icon: SiYoutube, href: 'http://youtube.com' },
    ],
    avgRating: 3.5,
    totalRating: 200,
    totalPatients: 24,
  },
    {
     id: 'doc_2',
     image: assets.doctor_2, 
     name: 'Dr. Mvambanu Correia',
     speciality: 'Ortopedia',
     degree: 'PHD',
     experience: '5 anos',
     about: 'Dr. Mvambanu Correia  é um cirurgião ortopédico especializado em medicina desportiva e substituição de articulações. Com uma paixão por ajudar atletas a recuperar e regressar às suas atividades favoritas, já realizou mais de 1000 cirurgias bem-sucedidas.',
     fees: 20000,
     social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
       avgRating: 2.5,
    totalRating: 250,
    totalPatients: 14,
 },
  { 
     id: 'doc_3',
     image: assets.doctor_3, 
     name: 'Dr. Isaac Manuel',
     speciality: 'Oftamologia',
     degree: 'MBBS',
     experience: '12 ano',
     about: 'Dr. Isaac Manuel Oftalmologista certificado com mais de 12 anos de experiência especializada em retina médica e cirúrgica. Apaixonado por prestar cuidados excepcionais aos pacientes através de técnicas de diagnóstico avançadas e tratamentos baseados em evidências. Especializado em doenças vasculares da retina, degeneração macular relacionada com a idade, retinopatia diabética e cirurgia vitreorretiniana.',
     fees: 18000,
     social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
       avgRating: 3.5,
    totalRating: 100,
    totalPatients: 4,
 },
  {  id: 'doc_4',
     image: assets.doctor_4,
     name: 'Dra. Rayanne Vicente',
     speciality: 'Medicina interna',
     degree: 'MD',
     experience: '2 anos',
     about: 'Dra. Rayanne Vicente  é uma internista especializada em gestão de doenças crónicas e cuidados preventivos. A Dra Vicente adota uma abordagem holística à medicina, enfatizando a importância das mudanças no estilo de vida na gestão da saúde. Ela é empenhada em promover um ambiente de apoio aos seus pacientes. ',
     fees: 10000,
     social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
     avgRating: 4.6,
     totalRating: 280,
     totalPatients: 36,
    },
    
  {  id: 'doc_5',
     image: assets.doctor_5,
     name: 'Dra. Adis Maturell',
     speciality: 'Dermatologia',
     degree: 'PHD',
     experience: '7 anos',
     about: 'Dra. Adis Maturell é  é uma dermatologista certificada, especializada no tratamento do cancro da pele e dermatologia cosmética. A Dra. Maturell dedica-se a prestar cuidados da mais alta qualidade e a manter-se atualizada sobre os últimos avanços na dermatologia.',
     fees: 25000,
     social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
    avgRating: 4.0,
    totalRating: 140,
    totalPatients: 14,
    },
  {  id: 'doc_6',
     image: assets.doctor_6,
     name: 'Dra. Irmina Silva',
     speciality: 'Cardiologia',
     degree: 'MBBS',
     experience: '15 anos',
     about: 'Dra. Irmina Silva é  é uma cardiologista certificado com mais de 15 anos de experiência no diagnóstico e tratamento de doenças cardíacas.  A Dr. Silva é apaixonada pela saúde cardíaca e trabalha em estreita colaboração com os pacientes para desenvolver planos de tratamento personalizados.',
     fees: 30000,
     social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
       avgRating: 3.0,
    totalRating: 120,
    totalPatients: 16,
    },
    {  id: 'doc_7',
     image: assets.doctor_5,
     name: 'Dra. Sanny Vicente',
     speciality: 'Dermatologia',
     degree: 'PHD',
     experience: '4 anos',
     about: 'Dra. Sanny Vicente é  é uma dermatologista certificada, especializada no tratamento do cancro da pele e dermatologia cosmética. A Dra. Maturell dedica-se a prestar cuidados da mais alta qualidade e a manter-se atualizada sobre os últimos avanços na dermatologia.',
     fees: 28000,
     social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
    avgRating: 4.0,
    totalRating: 140,
    totalPatients: 14,
    },
  {  id: 'doc_8',
     image: assets.doctor_6,
     name: 'Dr. Mario Costa',
     speciality: 'Cardiologia',
     degree: 'MBBS',
     experience: '18 anos',
     about: 'Dr. Mario Costa é  é uma cardiologista certificado com mais de 15 anos de experiência no diagnóstico e tratamento de doenças cardíacas.  A Dr. Silva é apaixonada pela saúde cardíaca e trabalha em estreita colaboração com os pacientes para desenvolver planos de tratamento personalizados.',
     fees: 32000,
     social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
       avgRating: 3.0,
    totalRating: 120,
    totalPatients: 16,
    },
];



//FAQS SECTION

export const faqs = [
  {
    question: "What is your medical care?",
    content:
      "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
  },
  {
    question: "What happens if I need to go a hospital?",
    content:
      "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
  },

  {
    question: "Can I visit your medical office?",
    content:
      "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
  },
  {
    question: "Does you provide urgent care?",
    content:
      "One Medical was founded on a better model of care one designed around patients needs that provides a higher level of quality and service affordably. We do this through innovative design, excellent customer service, and the efficient use of technology.",
  },
];


// FOOTER SECTION
export const footer_links = [
  {
    title: 'Saber Mais',
    links: [
      { path: '/',
        display: 'Home',

      },
      {
        path: '/',
       display: 'Procurar Medico',

      },
      {
        path: '/',
       display: 'Serviços',

      },
   
      {
        path: '/',
       display: 'Contacte-nos',

      },
  
    ],
  },
  {
    title: 'Notícias',
 news : [
    {
    path:  'https://www.news-medical.net/news/20250425/Telehealth-in-pediatric-primary-care-linked-to-responsible-antibiotic-use.aspx',
    title: 'Telessaúde na atenção primária pediátrica',
    year:  'April 25, 2025'
  },
    {
    path:  'https://www.news-medical.net/news/20250409/Rural-hospitals-and-patients-are-disconnected-from-modern-care.aspx',
    title: 'Os hospitais rurais estão desconectados da tecnologia',
    year:  'April 9, 2025'
  },
   {
    path:  'https://www.news-medical.net/news/20250409/Rural-hospitals-and-patients-are-disconnected-from-modern-care.aspx',
    title: ' Teledermoscopia oferece diagnóstico do cancro da pele',
    year:  'November  14, 2024'
  },
 
 ]

  },
   {
    title: 'Nossa Comunidade',
    connect:{
      phrase: 'Junte-se ao nosso ecossistema, e não perca as novidades de como estar sempre saudavél.',
    path: 'https://chat.whatsapp.com/BQWThupWvWJLxhTAwZYIQS',
    icon: <AiOutlineWhatsApp  />,
  }
  },

];

export const socialLinks = [
  { path: 'https://www.youtube.com/',
    icon: <AiFillYoutube className="group-hover:text-red-500 w-4 h-5"/>,
  },
  { path: 'https://www.instagram.com/',
    icon: <AiOutlineInstagram className="group-hover:text-black w-4 h-5"/>,
  },
  { path: 'https://www.facebook.com/',
    icon: <AiOutlineFacebook className="group-hover:text-blue-600 w-4 h-5"/>,
  },
 { path: 'https://www.linkedin.com/',
    icon: <RiLinkedinFill className="group-hover:text-blue-500 w-4 h-5"/>,
  }
]

 