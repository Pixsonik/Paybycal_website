import React from 'react'
import "./reward.css";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../asset/img/reward/image 38.png";
import img2 from "../../asset/img/reward/image 36.png";
import img3 from "../../asset/img/reward/image 37.png";

export default function Rewards() {
    return (
        <>
            <div  className='mainReward'>
                <div className="rewardHeadingdiv">
                    <h2 className='rewardHeading2'>How will we benefit you?</h2>
                    <div className="emptydiv3"></div>
                </div>
                <div className='row spaceClass'>
                    <div className="col-md-4">
                        <div className='rewardCard'>
                            <div className='whiteBack'>
                                <p>Get access to the best products in the market</p>
                            </div>
                            <div className='rewardImgdiv'>
                                <img id='img1' src={img1} className=""  />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='rewardCard'>
                            <div className='whiteBack'>
                                <p>Get the best coach for training</p>
                            </div>
                            <div className='rewardImgdiv'>
                                <img src={img2} id='img2' className=""  />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id='reward3' className='rewardCard'>
                            <div className='whiteBack'>
                                <p>Get the best nutritionist for staying fit</p>
                            </div>
                            <div className='rewardImgdiv'>
                                <img src={img3} id='img3' className=""  />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* mobile view  */}
            <Carousel style={{ display: 'none' }} className='rewardmobilecontainer '>
                <Carousel.Item interval={1000}  >
                    <div className='rewardCard'>
                        <div className='whiteBack'>
                            <p>Get access to the best products in the market</p>
                        </div>
                        <div className='rewardImgdiv'>
                            <img id='img1' src={img1} className="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className='rewardCard'>
                        <div className='whiteBack'>
                            <p>Get the best coach for training</p>
                        </div>
                        <div className='rewardImgdiv'>
                            <img src={img2} id='img2' className="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div id='reward3' className='rewardCard'>
                        <div className='whiteBack'>
                            <p>Get the best nutritionist for staying fit</p>
                        </div>
                        <div className='rewardImgdiv'>
                            <img src={img3} id='img3' className="" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
