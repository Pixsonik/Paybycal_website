import React from 'react';
import img from '../../asset/img/footerTwo/logo.png';
import './FooterTwo.css';
import insta from '../../asset/img/footerTwo/instagram.png';
import facebook from '../../asset/img/footerTwo/facebook.png';
import linkdin from '../../asset/img/footerTwo/linkedin.png';

const FooterTwo = () => {
  return (
      <div>
        <div className='container'>
           <div className='row footercontent'>
            <div className='col-lg-8 col-md-8 col-6'> 
               <div className='row ' style={{height:'100%'}}>

            <div className='col-lg-6 col-md-6 firstCol'>
                <ul>
                    <li className='footerList'>Terms & Condition</li>
                    <li className='footerList'>Privacy Policy</li>
                    <li className='footerList'>FAQ</li>
                </ul>
              </div>
              <div className='col-lg-6 col-md-6 social' >
                <div className='socialContent'>
                <img src={insta} alt="insta" />
                <img src={facebook} alt="facebook" />
                <img src={linkdin} alt="facebook" />
                </div>
              </div>
            </div>
               </div>
             
              
              <div className='col-lg-4 col-md-4 col-6 ThirdContent'>
                <div className='footerThird'>
                 <img src={img} alt="" />
                 <p className='footerData'>Copyright © 2022 Paybycal</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    )
}

export default FooterTwo