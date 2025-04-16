//import Image from "next/image";
import { Hero } from "./Components";
import About from "./Components/About";
import Classes from "./Components/Classes";
import FAQ from "./Components/FAQ";
import Membership from "./Components/Membership";
import Promotions from "./Components/Promotions";
import Team from "./Components/Team";


import Testimonial from "./Components/Testimonial";

export default function Home() {
  return (
   
      <main >
       <Hero />
       <About />
       <Classes />
       <Team />
       <Membership />
       <FAQ />
       <Promotions />
       <Testimonial />
      </main>
      
  );
}
