import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../component/Home/Home';
import Phone from '../component/Contact/Phone';
import Blog from '../component/blog/Blog';
import MainBlog from '../component/blog/MainBlog';

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
           <Route path='/blog'>
             <Route index element={<Blog />}/>
           </Route>
           <Route path='/mainblog'>
             <Route index element={<MainBlog />}/>
           </Route>
       </Routes>

     </BrowserRouter>
    </>
  )
}

export default Pageroute