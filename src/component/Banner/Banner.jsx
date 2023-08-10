import React from "react";
import arrow from "../../asset/img/banner/chevron-down.png";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="rkp-image">
        <div className="rkpsecond" style={{margin: "140px 0px"}}>
        {/* <div className="rkpsecond" style={{margin: "345px 0px"}}> */}
          <p className="rkp-text">"Stay active, <br /> earn rewards!"</p>
          <p className="rkp-text2">It's time to make Fitness a rewarding Habit</p>
        </div>
        <p className="lastLine">Paybycal is the subsidiary of helthofit pvt ltd</p>
        <img id="bannerArrow" src={arrow} alt="" />
        <img id="bannerArrow2" src={arrow} alt="" />
      </div>
      {/* <img src={Bannerimg} alt="" style={{width:"100%" , height:'auto'}} /> */}
    </>
  );
};

export default Banner;
