import React from 'react'
import "./boxContainer.css";
// import Bannerimg from "../../asset/img/boxcontainer/Frame 43.png";
// import Bannerimg2 from "../../asset/img/boxcontainer/Frame 44.png";
// import Bannerimg3 from "../../asset/img/boxcontainer/Frame 45.png";
import Bannerimg from "../../asset/img/boxcontainer/get connected (1).png";
import Bannerimg2 from "../../asset/img/boxcontainer/get moving (1).png";
import Bannerimg3 from "../../asset/img/boxcontainer/reward yourself.png";


import Carousel from 'react-bootstrap/Carousel';
// import Bannerimg from "../../asset/img/banner/banner.png";



export default function BoxContainer() {
    return (
        <>
            <div className='mainBox'>
                {/* <div className="maincardBoxDiv">
                    <div className="maincardd">
                        <div className="img">
                            <img  src={Bannerimg} alt="" />
                        </div>
                        <div className="carddBody">
                            <h5 className="card-title">Get connected</h5>
                            <p className="card-text">Download our app to your Android and iPhone and connect it to your preferred tracker. Get, Set, Go!</p>
                        </div>
                    </div>
                    <div className="maincardd">
                        <div className="img">
                            <img  src={Bannerimg2} alt="" />
                        </div>
                        <div className="carddBody">
                            <h5 className="card-title">Get Moving</h5>
                            <p className="card-text">Download our app to your Android and iPhone and connect it to your preferred tracker. Get, Set, Go!</p>
                        </div>
                    </div>
                    <div className="maincardd">
                        <div className="img">
                            <img  src={Bannerimg3} alt="" />
                        </div>
                        <div className="carddBody">
                            <h5 className="card-title">Reward yourself</h5>
                            <p className="card-text">Download our app to your Android and iPhone and connect it to your preferred tracker. Get, Set, Go!</p>
                        </div>
                    </div>
                </div> */}

                <div className="row boxPCcontainer">
                    <div className="col-md-4">
                        <div className="card" style={{ width: '20rem',height:'auto',borderRadius:'0px' }}>
                            <img src={Bannerimg} className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <h5 className="card-title">Get connected</h5>
                                <p className="card-text">Download our app to your Android and iPhone and connect it to your preferred tracker. Get, Set, Go!</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '20rem',height:'auto',borderRadius:'0px' }}>
                            <img src={Bannerimg2} className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <h5 className="card-title">Get Moving</h5>
                                <p className="card-text">Walk, run or dance but let your every step count! Be active and get chance to reward yourself with our Calcoins</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '20rem',height:'auto',borderRadius:'0px' }}>
                            <img src={Bannerimg3} className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <h5 className="card-title">Reward yourself</h5>
                                <p className="card-text">Trade your steps for deserving rewards, treat yourself, and redeem them within your community. You've earned it!</p>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* mobile view  */}
                <Carousel style={{display:'none'}} className='boxmobilecontainer '>
                    <Carousel.Item interval={1000}  >
                        <div className="card" style={{ width: '18rem', height: 'auto',borderRadius:'0px' }}>
                            <img src={Bannerimg} className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <h5 className="card-title">Get connected</h5>
                                <p className="card-text">Download our app to your Android and iPhone and connect it to your preferred tracker. Get, Set, Go!</p>
                            </div> */}
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                    <div className="card" style={{ width: '18rem',height:'auto',borderRadius:'0px' }}>
                            <img src={Bannerimg2} className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <h5 className="card-title">Get Moving</h5>
                                <p className="card-text">Walk, run or dance but let your every step count! Be active and get chance to reward yourself with our Calcoins</p>
                            </div> */}
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card" style={{ width: '18rem',height:'auto',borderRadius:'0px' }}>
                            <img src={Bannerimg3} className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <h5 className="card-title">Reward yourself</h5>
                                <p className="card-text">Trade your steps for deserving rewards, treat yourself, and redeem them within your community. You've earned it!</p>
                            </div> */}
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        </>
    )
}
