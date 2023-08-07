import React from 'react'
import "./whatSay.css";
import Bannerimg from "../../asset/img/whatsay/Rectangle.png";


export default function WhatSay() {
    return (
        <div className='mainWhat'>
            {/* <h1 className='h1'>what they say about us</h1> */}
            <div className="whatsayHeadingdiv">
                <h1 className='whatsayHeading'>what they say about us</h1>
                <div className="emptydiv2"></div>
            </div>
            {/* <div id="carouselExample" class="carousel slide"> */}
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner car">
                    <div class="carousel-item active">
                        <div className="row whatflexbox">
                            <div className="col-lg-6 wFirstDiv">
                                <p>"Using the fitness app has been a game-changer for me! I've lost 15 pounds in just two months, and I feel more energetic than ever. The app's personalized workout plans and meal suggestions have been spot on. Highly recommend it!"</p>
                                <div className="imgdiv">
                                    <img src={Bannerimg} alt="" />
                                    <h5>Nemo enim ipsam</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 mainsideimgdiv">
                                <img className='sideImg' src={Bannerimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row whatflexbox">
                            <div className="col-lg-6 wFirstDiv">
                                <p>"Using the fitness app has been a game-changer for me! I've lost 15 pounds in just two months, and I feel more energetic than ever. The app's personalized workout plans and meal suggestions have been spot on. Highly recommend it!"</p>
                                <div className="imgdiv">
                                    <img src={Bannerimg} alt="" />
                                    <h5>Nemo enim ipsam</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 mainsideimgdiv">
                                <img className='sideImg' src={Bannerimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row whatflexbox">
                            <div className="col-lg-6 wFirstDiv">
                                <p>"Using the fitness app has been a game-changer for me! I've lost 15 pounds in just two months, and I feel more energetic than ever. The app's personalized workout plans and meal suggestions have been spot on. Highly recommend it!"</p>
                                <div className="imgdiv">
                                    <img src={Bannerimg} alt="" />
                                    <h5>Nemo enim ipsam</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 mainsideimgdiv">
                                <img className='sideImg' src={Bannerimg} alt="" />
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
        </div>
    )
}
