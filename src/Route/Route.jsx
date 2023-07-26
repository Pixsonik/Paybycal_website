import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../component/Home/Home';
import Phone from '../component/Contact/Phone';

const Pageroute = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
           <Route path='/'>
               <Route index element={<Home/>}/>
           </Route>
           <Route path='/contact'>
             <Route index element={<Phone/>}/>
           </Route>
       </Routes>

     </BrowserRouter>
    </>
  )
}

export default Pageroute