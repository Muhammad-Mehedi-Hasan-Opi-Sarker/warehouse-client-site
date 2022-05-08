import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/picture/laptop6.jpg';
import banner2 from '../../images/picture/laptop10.jpg';
import banner3 from '../../images/picture/laptop11.jpg';

const Banner = () => {
    return (
        <div>
           <Carousel fade>
  <Carousel.Item>
    <img style={{height:'500px',width:'500px'}}
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'500px',width:'500px'}}
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'500px',width:'500px'}}
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;