"use client";
//DEPENDENCY
import Link from 'next/link';
//PAGES
import { 

   Contact,
   DoctorDetails, 
   Doctors, 
   HomePage, 
   Login, 
   Services, 
   SignUp,  

  } 
  from '../Pages'

const Routers = () => {
  return <Routes>
   <Route path='/' element={<HomePage/>} />
   <Route path='/home' element={<HomePage/>} />
   <Route path='/services' element={<Services/>} />
   <Route path='/doctors' element={<Doctors/>} />
   <Route path='/doctors/:id' element={<DoctorDetails/>} />
   <Route path='/contact' element={<Contact/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/register' element={<SignUp/>} />
  </Routes>
}

export default Routers
