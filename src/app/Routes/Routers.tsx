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
  return <>
   <Link path='/' element={<HomePage/>} />
   <Link path='/home' element={<HomePage/>} />
   <Link path='/services' element={<Services/>} />
   <Link path='/doctors' element={<Doctors/>} />
   <Link path='/doctors/:id' element={<DoctorDetails/>} />
   <Link path='/contact' element={<Contact/>} />
   <Link path='/login' element={<Login/>} />
   <Link path='/register' element={<SignUp/>} />
  </>
}

export default Routers
