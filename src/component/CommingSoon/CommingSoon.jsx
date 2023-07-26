import React from "react";
import imgOne from '../../asset/img/comming/comOneOne.png'
import imgTwo from '../../asset/img/comming/comOneTwo.png'
import imgThree from '../../asset/img/comming/comOneThree.png'
import imgFour from '../../asset/img/comming/comOneFour.png'
import imgFive from '../../asset/img/comming/comTwoOne.png'
import imgsix from '../../asset/img/comming/comTwoTwo.png'
import imgseven from '../../asset/img/comming/comTwoThree.png'
import imgeight from '../../asset/img/comming/comTwoFour.png'
import paybycal from '../../asset/img/comming/comPayByCal.png'

import './CommingSoon.css'


const CommingSoon = () => {
  return <>
     <div className="container-fluid">
        <div className="d-flex justify-content-between">
            <img src={imgOne} alt="" className="comImg" />
            <img src={imgTwo} alt="" className="comImg" />
            <img src={imgThree} alt="" className="comImg" />
            <img src={imgFour} alt="" className="comImg" />
        </div>
        <div style={{
            position: 'absolute',
            width: '2108px',
            height: '234.84px',
            left: '-423px',
            top: '4815.73px',       
            background: '#FFFFFF',
            transform: 'rotate(-5.14deg)'
            ,display:"flex",
            justifyContent:"space-around"
        }}>
            <img src={paybycal} alt="" className="paybycalExpert"/>
            <p className="commingText">Coming Soon </p>
        </div>
        <div className="d-flex justify-content-between">
            <img src={imgFive} alt="" className="comImg" />
            <img src={imgsix} alt="" className="comImg" />
            <img src={imgseven} alt="" className="comImg" />
            <img src={imgeight} alt="" className="comImg" />
        </div>
     </div>
  </>;
};

export default CommingSoon;
