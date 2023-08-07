import React from 'react'
import walk from '../../asset/img/last\ container/Ellipse 207.png'
import dance from '../../asset/img/last\ container/Ellipse 208.png'
import run from '../../asset/img/last\ container/Ellipse 216.png'
import hike from '../../asset/img/last\ container/Ellipse 217.png'
import './lastcontainer.css';
import Carousel from 'react-bootstrap/Carousel';


export default function LastContainer() {
    return (
        <div className='mainLastcontainer'>
            <p>Exclusive for Everyone, PaybyCal is for all level of activity <br />
                We are here for you, making your activity count at every step <br />
                Be it walking, running or even climbing upstairs, <br />
                we will reward you with the best!
            </p>
            <div className="walk-dance">
                <div className="walkdiv">
                    <img src={walk} alt="" />
                    <h6>Walk</h6>
                </div>
                <div className="walkdiv">
                    <img src={run} alt="" />
                    <h6>Dance</h6>
                </div>
                <div className="walkdiv">
                    <img src={dance} alt="" />
                    <h6>Run</h6>
                </div>
                <div className="walkdiv">
                    <img src={hike} alt="" />
                    <h6>Hike</h6>
                </div>
            </div>


            {/* mobile view  */}
            <Carousel style={{ display: 'none' }} id='lastcontainerDiv' className='boxmobilecontainer '>
                <Carousel.Item interval={1000}  >
                    <div className="walkdiv">
                        <img src={walk} alt="" />
                        <h6>Walk</h6>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div className="walkdiv">
                        <img src={run} alt="" />
                        <h6>Dance</h6>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="walkdiv">
                        <img src={dance} alt="" />
                        <h6>Run</h6>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="walkdiv">
                        <img src={hike} alt="" />
                        <h6>Hike</h6>
                    </div>
                </Carousel.Item>
            </Carousel>

            <h1>Just go for it and earn it</h1>

        </div>
    )
}
