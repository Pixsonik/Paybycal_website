import React from "react";
import Navbar from "../Navbar/Navbar";
import FooterTwo from "../FooterTwo/FooterTwo";
import "./contact.css";

const Phone = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          background:
            "linear-gradient(104.31deg, #F95B30 5.98%, #D81C65 93.2%)",
        }}
      >
        <div className="container ContForm">
          <p className="contactTitle">Get In Touch</p>
          <div className="row contactRow">
            <div className="col-12 contactMain">
              {/* Call */}
              <div id="calldiv" className="iconDiv">
                <div className="col-lg-3">
                  <i className="icon fa-solid fa-phone"></i>
                </div>
                <div className="col-lg-9">
                  <p className="  iconText">Call Us</p>
                  <p  className="iconSecText">
                    <a className="iconSecTexta" target="_blank" href="tel: 8108006060">+91 8108006060</a>                  
                    <br />
                    <a className="iconSecTexta" target="_blank" href="tel: 8108336060">+91 8108336060</a>
                  </p>
                </div>
              </div>
              {/* email */}
              <div id="emaildiv" className="iconDiv">
                <div className="col-lg-3">
                  <i class="icon fa-solid fa-envelope"></i>
                </div>
                <div className="col-lg-9">
                  <p className="  iconText">Email</p>
                  <a target="_blank" href="mailto: support@paybycal.com" className="iconSecText">
                  support@paybycal.com
                  </a>
                </div>
              </div>
              {/* location */}
              <div id="locationdiv" className="iconDiv">
                <div className="col-lg-3">
                  <i class="icon fa-sharp fa-solid fa-location-dot licon"></i>
                </div>
                <div className="col-lg-9">
                  <p className="iconText">Location</p>
                  <a target="_blank" href="https://goo.gl/maps/TgmAzmPWjUWHeRZN7" className="iconSecText">
                  1003, 10th floor, kamdhenu commerz, sector 14, kharghar, Navi Mumbai 410210
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-6 col-8 formcol">
                  <div className="formcontent">
                    <p className="formTitle">Write to us</p>
                    <input type="text" placeholder="Full Name" name="" id="" className="smallinput first" />
                    <input type="email" placeholder="Email" name="" id="" className="smallinput second" />
                    <input type="text" placeholder="Your massage" className="biginput" />
                    <textarea class="form-control" placeholder="Your massage" id="floatingTextarea"></textarea>
                    <button className="formbtn">Send</button>
                  </div>
            </div> */}
          </div>
        </div>
      </div>
      <FooterTwo />
    </div>
  );
};

export default Phone;
