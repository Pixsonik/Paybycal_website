import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../asset/img/slider/feature1.png'
import slider2 from '../../asset/img/slider/feature2.png'
import slider3 from '../../asset/img/slider/feature3.png'
import slider4 from '../../asset/img/slider/feature4.png'
import './Slider.css';



function IndividualIntervalsExample() {
  return (
    <Carousel className='container'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;