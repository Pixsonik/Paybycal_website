import React from 'react';
import img from '../../asset/img/footerTwo/newLogo.png';
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

            <div className='col-lg-4 col-md-6 firstCol'>
                <ul>
                  <a target='_blank' href="/terms"><li className='footerList'>Terms & Conditions</li></a>
                  <a target='_blank' href="/privacy"><li className='footerList'>Privacy Policy</li></a>
                  <a target='_blank' href="/faq"><li className='footerList'>FAQ</li></a>
                </ul>
              </div>
              <div className='col-lg-8 col-md-6 social' >
                <div className='socialContent'>
                {/* <img src={insta} alt="insta" /> */}
              <a target='_blank' href="https://instagram.com/paybycal?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">
                <i class="fa-brands fa-instagram" style={{color:'#E5364F',fontSize:'25px'}}></i></a>         
                <a target='_blank' href="https://www.facebook.com/helthofit?mibextid=LQQJ4d">
                <i class="fa-brands fa-facebook-f" style={{color:'#E5364F',fontSize:'25px'}}></i></a>
                {/* <img src={linkdin} alt="facebook" /> */}
                <i class="fa-brands fa-linkedin-in" style={{color:'#E5364F',fontSize:'25px'}}></i>
                </div>
                <div className="fContent">
                <p className="footerlastLine">Paybycal is the subsidiary of Helthofit pvt ltd</p>
                <div className="fLine"></div>
                <p className='footerData'>Copyright © 2023 Paybycal</p>
                </div>
              </div>
            </div>
               </div>
             
              
              <div className='col-lg-4 col-md-4 col-6 ThirdContent'>
                <div className='footerThird'>
                 <img  src={img} alt="" />
                 <p style={{textAlign:'right'}} className='footerData'>Address: 1003, 10th floor,<br></br> Kamdhenu Commerz, Sec-14, Kharghar,<br></br> Navi Mumbai-410210</p>
                 <p id='fcontactnumber' className='footerData'>Contact- +91 8108006060 +91 9130083363</p>
                </div>
              </div>
           </div>


           {/* mobile view  */}
        <div style={{display:'none'}} className="mobileDIv">
          <div className="mobileDIvRow">
            <div className='MfirstCol'>
              <ul>
                <a target='_blank' href="/terms"><li className='footerList'>Terms & Conditions</li></a>
                <a target='_blank' href="/privacy"><li className='footerList'>Privacy Policy</li></a>
                <a target='_blank' href="/faq"><li className='footerList'>FAQ</li></a>
              </ul>
            </div>
            <div className="MsecondCol"><img src={img} alt="" /></div>
          </div>
          <div>
            <p style={{ textAlign: 'center' }} className='footerData'>Address: 1003, 10th floor,<br></br> Kamdhenu Commerz, Sec-14, Kharghar,<br></br> Navi Mumbai-410210</p>
            <p id='fcontactnumber' className='footerData'>Contact- +91 8108006060 +91 9130083363</p>
          </div>
          <div style={{marginTop:'16px'}} className='col-lg-8 col-md-6 social' >
            <div className='socialContent'>
              {/* <img src={insta} alt="insta" /> */}
              <a target='_blank' href="https://instagram.com/paybycal?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">
                <i class="fa-brands fa-instagram" style={{ color: '#E5364F', fontSize: '25px' }}></i></a>
              <a target='_blank' href="https://www.facebook.com/helthofit?mibextid=LQQJ4d">
                <i class="fa-brands fa-facebook-f" style={{ color: '#E5364F', fontSize: '25px' }}></i></a>
              {/* <img src={linkdin} alt="facebook" /> */}
              <i class="fa-brands fa-linkedin-in" style={{ color: '#E5364F', fontSize: '25px' }}></i>
            </div>
            <div className="fContent">
              <p className="footerlastLine">Paybycal is the subsidiary of Helthofit pvt ltd</p>
              <div className="fLine"></div>
              <p className='footerData'>Copyright © 2023 Paybycal</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}

export default FooterTwo