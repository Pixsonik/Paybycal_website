import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../component/Home/Home';
import Phone from '../component/Contact/Phone';
import Blog from '../component/blog/Blog';
import MainBlog from '../component/blog/MainBlog';

import PrivacyFooter from '../component/privacyFooter/PrivacyFooter';
import Faq from '../component/FAQ/Faq';
import Terms from '../component/Terms/Terms';

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
           <Route path='/mainblog/:id'>
             <Route index element={<MainBlog />}/>
           </Route>
           <Route path='/terms'>
             <Route index element={<Terms />}/>
           </Route>
           <Route path='/privacy'>
             <Route index element={<PrivacyFooter />}/>
           </Route>
           <Route path='/faq'>
             <Route index element={<Faq />}/>
           </Route>
       </Routes>

     </BrowserRouter>
    </>
  )
}

export default Pageroute