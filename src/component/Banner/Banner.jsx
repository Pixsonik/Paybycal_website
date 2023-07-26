import React from "react";
import Bannerimg from "../../asset/img/banner/banner.png";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="rkp-image">
        <div style={{margin: "345px 0px"}}>
          <p className="rkp-text">Burn calories,</p>
          <p className="rkp-text">Earn Calcoins</p>
        </div>
      </div>
      {/* <img src={Bannerimg} alt="" style={{width:"100%" , height:'auto'}} /> */}
    </>
  );
};

export default Banner;
