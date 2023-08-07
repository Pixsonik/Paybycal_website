import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../asset/img/slider/feature 1.png'
import slider2 from '../../asset/img/slider/feature 2.png'
import slider3 from '../../asset/img/slider/feature 3.png'
import slider4 from '../../asset/img/slider/feature 4.png'

import Asset1 from '../../asset/img/slider/Asset 1.png'
import Asset2 from '../../asset/img/slider/Asset 2.png'
import Asset3 from '../../asset/img/slider/Asset 3.png'
import Asset4 from '../../asset/img/slider/Asset 4.png'
import rectangle from '../../asset/img/slider/Rectangle 93.png'
import './Slider.css';



function IndividualIntervalsExample() {
  return (
    <>
      <div className="sliderHeading">
        <h1 className='featureHeading'>FEATURES</h1>
        <div className="emptydiv"></div>
      </div>
      <Carousel className='container featureCon'>
        <Carousel.Item interval={1000}  >
          <img className="d-block w-100 cimg" src={slider2} alt="First slide" />
          <p className='settarget'>SET TARGET</p>
          <div className="featureediv ">
            <p>Fat Loss</p>
            <p>Muscle Gain</p>
            <p>Toned Body</p>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100 cimg" src={slider4} alt="Second slide" />
          <p className='settarget'>SET TARGET</p>
          <div className="featureediv ">
            <p>Fat Loss</p>
            <p>Muscle Gain</p>
            <p>Toned Body</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 cimg" src={slider3} alt="Third slide" />
          <p className='settarget'>SET TARGET</p>
          <div className="featureediv ">
            <p>Fat Loss</p>
            <p>Muscle Gain</p>
            <p>Toned Body</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 cimg" src={slider1} alt="Third slide" />
          <p className='settarget'>SET TARGET</p>
          <div className="featureediv ">
            <p>Fat Loss</p>
            <p>Muscle Gain</p>
            <p>Toned Body</p>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* mobile view */}
      <div className="exp">
      <div className="background"></div>
      <Carousel style={{ display: 'none' }} className='containerr featureCon2'>
        <Carousel.Item interval={1500}  >
          <div className="positiondiv">
            {/* <div className="background"><img src={rectangle} alt="" /></div> */}
            <img className="d-block w-100 cimg2" src={Asset1} alt="First slide" />
            <p className='settarget'>SET TARGET</p>
            <div className="featureediv ">
              <p>Fat Loss</p>
              <p>Muscle Gain</p>
              <p>Toned Body</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="positiondiv">
            {/* <div className="background"></div> */}
            <img className="d-block w-100 cimg2" src={Asset3} alt="fourth slide" />
            <p className='settarget'>REDEEM CALCOINS</p>
            <div className="featureediv ">
              <p>Expert Coaches</p>
              <p>Amazing Products</p>
              {/* <p>Toned Body</p> */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="positiondiv">
            {/* <div className="background"></div> */}
            <img className="d-block w-100 cimg2" src={Asset2} alt="Second slide" />
            <p className='settarget'>TRACK YOUR ACTIVITIES</p>
            <div className="featureediv ">
              <p>Steps</p>
              <p>Exercises</p>
              <p>Meals</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="positiondiv">
            {/* <div className="background"></div> */}
            <img className="d-block w-100 cimg2" src={Asset4} alt="Third slide" />
            <p className='settarget'>COMPLETE DAILY TARGET</p>
            <div className="featureediv ">
              <p>Earn Calcoin</p>
              {/* <p>Muscle Gain</p>
              <p>Toned Body</p> */}
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
      </div>

    </>
  );
}

export default IndividualIntervalsExample;