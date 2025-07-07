'use client'
import React from 'react';
import { SiLinkedin, SiYoutube } from 'react-icons/si';
import { RiTwitterXLine } from 'react-icons/ri';
import d from '../../../public/doc1.jpg'
import d1 from '../../../public/doc2.jpeg'
import d2 from '../../../public/doc3.jpg'
import d3 from '../../../public/doc4.jpg'
import d4 from '../../../public/doc5.jpg'
import d5 from '../../../public/doc6.jpg'
import Image, { StaticImageData }  from 'next/image';


interface SocialLink {
  icon: React.ComponentType;
  href: string;
}

interface Member {
  src: string | StaticImageData;
  alt: string;
  className: string;
  name: string;
  role: string;
  social: SocialLink[];
}

const teamMembers: Member[] = [
  {
    src: d,
    alt: "Team member 1",
    className: "w-44 h-56 rounded-2xl object-cover",
    name: 'Dr. Killian Chipalavela',
    role: 'Ginecologista',
    social: [
      { icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/' },
      { icon: RiTwitterXLine, href: 'http://twitter.com' },
      { icon: SiYoutube, href: 'http://youtube.com' },
    ],
  },
    { src: d1, 
     alt: "Team tailwind section", 
     className: "w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto",
     name: 'Dr. Mvambanu Correia',
     role: 'Cardiologista',
    social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
 },

  { src: d2, 
     alt: "Team tailwind section",
     className: "w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0",
     name: 'Dr. Isaac Manuel',
     role: 'Oftamologista',
    social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
 },
  { src: d3,
     alt: "Team tailwind section",
     className: "w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto",
     name: 'Dra. Rayanne Vicente',
     role: 'Hematologista',
    social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
    },
  { src: d4,
     alt: "Team tailwind section",
     className: "w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto",
     name: 'Dra. Adis Maturell',
     role: 'Nutricionista',
    social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
    },
  { src: d5,
     alt: "Team tailwind section",
     className: "w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0",
     name: 'Dra. Irmina Silva',
     role: 'Fisioterapeuta',
    social: [
        {icon: SiLinkedin, href: 'https://www.linkedin.com/in/claudia-marina-b-702444137/'},
        {icon: RiTwitterXLine, href: 'http://twitter.com'  },
        {icon: SiYoutube, href: 'http://youtube.com' }, 
    ],
    },
];

const FlipCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="flip-container">
    <div className="flipper">
      <div className="front">
        <Image src={member.src} alt={member.alt} className={member.className} />
      </div>
      <div className="back">
        <div className="text-center flex flex-col items-center w-44 h-56 border rounded-2xl border-quar p-8 text-gray-500 dark:text-gray-400">
          <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h3>
          <p>{member.role}</p>
          <ul className="flex justify-center mt-4 space-x-4">
            {member.social.map((socialItem, idx) => {
              const Icon = socialItem.icon;
              return (
                <li key={idx}>
                  <a href={socialItem.href} target="_blank" rel="noopener noreferrer" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <Icon  />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      .flip-container {
        perspective: 1000px;
        width: 176px; /* matches w-44 (11rem) * 16px */
        height: 224px; /* matches h-56 (14rem) * 16px */
        margin: auto;
      }
      .flipper {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }
      .flip-container:hover .flipper {
        transform: rotateY(180deg);
      }
      .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 1rem;
        overflow: hidden;
        top: 0;
        left: 0;
      }
      .front {
        z-index: 2;
      }
      .back {
        background-color: #333;
        color: #fafafa;
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
      }
    `}</style>
  </div>
);

const FlipCardsExample: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {teamMembers.map((member, index) => (
        <FlipCard key={index} member={member} />
      ))}
    </div>
  );
};

export default FlipCardsExample;

