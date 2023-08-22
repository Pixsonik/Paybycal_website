import React from 'react'
import "./whatSay.css";
import Bannerimg from "../../asset/img/whatsay/Rectangle.png";
import boy from "../../asset/img/whatsay/boy.jpg";
import boy2 from "../../asset/img/whatsay/boy2.jpg";
import girl from "../../asset/img/whatsay/girl.jpg";
import girl1 from "../../asset/img/whatsay/girl2.jpg";

import Carousel from 'react-bootstrap/Carousel';

export default function WhatSay() {
    return (
        <div className='mainWhat'>
            {/* <h1 className='h1'>what they say about us</h1> */}
            <div className="whatsayHeadingdiv">
                <h1 className='whatsayHeading'>what they say about us</h1>
                <div className="emptydiv2"></div>
            </div>
            {/* <div id="carouselExample" class="carousel slide"> */}
            <div id="carouselExampleAutoplaying" class="carousel slide whatsaydesktopcarousel" data-bs-ride="carousel">
                <div class="carousel-inner car">
                    <div class="carousel-item active">
                        <div className="row whatflexbox">
                            <div className="col-lg-6 wFirstDiv">
                                <p>"Living in a small town, I don't have access to fancy gyms. Thanks to this app, I can work out from home without any equipment and still see amazing results!"</p>
                                <div className="imgdiv">
                                    {/* <img src={Bannerimg} alt="" /> */}
                                    <h5>- Jaya P</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 mainsideimgdiv">
                                <img className='sideImg' src={girl} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row whatflexbox">
                            <div className="col-lg-6 wFirstDiv">
                                <p>"I travel a lot for work, and maintaining a fitness routine was tough. With this app's travel-friendly workouts, I can stay in shape no matter where I am in India."</p>
                                <div className="imgdiv">
                                    {/* <img src={Bannerimg} alt="" /> */}
                                    <h5>- Sameer R</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 mainsideimgdiv">
                                <img className='sideImg' src={boy} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row whatflexbox">
                            <div className="col-lg-6 wFirstDiv">
                                <p> "I've lost 15 kgs using this app, and what I love most is that it doesn't promote crash diets. It encourages a balanced approach that's sustainable, even with our Indian food habits."</p>
                                <div className="imgdiv">
                                    {/* <img src={Bannerimg} alt="" /> */}
                                    <h5>- Karan A</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 mainsideimgdiv">
                                <img className='sideImg' src={boy2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row whatflexbox">
                            <div className="col-lg-6 wFirstDiv">
                                <p> "I was skeptical about virtual coaching, but the trainers on this app are responsive and knowledgeable. It's like having a personal coach right at home!" </p>
                                <div className="imgdiv">
                                    {/* <img src={Bannerimg} alt="" /> */}
                                    <h5>- Tanvi D</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 mainsideimgdiv">
                                <img className='sideImg' src={girl1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            {/* mobile view */}
            <Carousel style={{ display: 'none' }} className='containerr featureCon2'>
                <Carousel.Item interval={1500}  >
                    <div className="row whatflexbox">
                        <div className="col-lg-6 wFirstDiv">
                            <p>"Living in a small town, I don't have access to fancy gyms. Thanks to this app, I can work out from home without any equipment and still see amazing results!"</p>
                            <div className="imgdiv">
                                <img src={girl} alt="" />
                                <h5>- Jaya P</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 mainsideimgdiv">
                            <img className='sideImg' src={girl} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}  >
                    <div className="row whatflexbox">
                        <div className="col-lg-6 wFirstDiv">
                            <p>"I travel a lot for work, and maintaining a fitness routine was tough. With this app's travel-friendly workouts, I can stay in shape no matter where I am in India."</p>
                            <div className="imgdiv">
                                <img src={Bannerimg} alt="" />
                                <h5>- Sameer R</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 mainsideimgdiv">
                            <img className='sideImg' src={boy} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}  >
                    <div className="row whatflexbox">
                        <div className="col-lg-6 wFirstDiv">
                            <p>"I've lost 15 kgs using this app, and what I love most is that it doesn't promote crash diets. It encourages a balanced approach that's sustainable, even with our Indian food habits."</p>
                            <div className="imgdiv">
                                <img src={Bannerimg} alt="" />
                                <h5>- Karan A</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 mainsideimgdiv">
                            <img className='sideImg' src={boy2} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1500}  >
                    <div className="row whatflexbox">
                        <div className="col-lg-6 wFirstDiv">
                            <p>"I was skeptical about virtual coaching, but the trainers on this app are responsive and knowledgeable. It's like having a personal coach right at home!"</p>
                            <div className="imgdiv">
                                <img src={Bannerimg} alt="" />
                                <h5>- Tanvi D</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 mainsideimgdiv">
                            <img className='sideImg' src={girl1} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
