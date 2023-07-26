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
            <div className="col-6">
              {/* Cal */}
              <div className="iconDiv">
                <div className="col-lg-3">
                  <i className="icon fa-solid fa-phone"></i>
                </div>
                <div className="col-lg-9">
                  <p className="  iconText">Call Us</p>
                  <p className="iconSecText">
                    +91 99999999
                    <br />
                    +91 99999999
                  </p>
                </div>
              </div>
              {/* email */}
              <div className="iconDiv">
                <div className="col-lg-3">
                  <i class="icon fa-solid fa-envelope"></i>
                </div>
                <div className="col-lg-9">
                  <p className="  iconText">Email</p>
                  <p className="iconSecText">
                    Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              {/* location */}
              <div className="iconDiv">
                <div className="col-lg-3">
                  <i class="icon fa-sharp fa-solid fa-location-dot"></i>
                </div>
                <div className="col-lg-9">
                  <p className="  iconText">Location</p>
                  <p className="iconSecText">
                    Amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-8 formcol">
                  <div className="formcontent">
                    <p className="formTitle">Write to us</p>
                    <input type="text" placeholder="Full Name" name="" id="" className="smallinput first" />
                    <input type="email" placeholder="Email" name="" id="" className="smallinput second" />
                    <input type="text" placeholder="Your massage" className="biginput" />
                    <button className="formbtn">Send</button>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </div>
  );
};

export default Phone;
