
import React, { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import pic1 from '../../../images/banner2.jpg';
import pic2 from '../../../images/banner3.jpg';
import pic3 from '../../../images/banner4.jpg';
import './Banner.css';
import { Link } from 'react-router-dom';
import { BsFillStarFill} from 'react-icons/bs';
import img from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'


const Banner = () => {
 
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:2000,
        easing:'ease',
    });
})

    return (
      
      <div data-aos="zoom-in">
        <Container>

        <Row>
          <Col lg={8} xs={8}>
          <div className="banner mt-3">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-95"
      src={pic1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-95"
      src={pic2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-95"
      src={pic3}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
          </Col>


          <Col lg={4} xs={4} className='mt-5 pt-5 sidebar'>
         <h5 className='rated' >Our Top Rated Spots</h5>
         <Row xs={1} md={2} lg={2} className="mt-3 rounded">
          <Col>
          
          <Card.Body style={{height:"250px"}}>
          <Card.Img style={{width:'89px'}} variant="top" src={img2}/>
        <h5 className="text-primary  bg-dark p-2 rounded">Bisanakandi</h5>
        <p className="text-warning fw-bold"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/> </p>       
    
      </Card.Body>
          </Col>
          <Col>
          
          <Card.Body style={{height:"250px"}}>
          <Card.Img style={{width:'100px'}} variant="top" src={img}/>
        <Card.Title className="text-primary bg-dark p-2 rounded">Paharpur</Card.Title>
        <p className="text-warning fw-bold"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/> </p>      
    
      </Card.Body>
          </Col>
         
         
         </Row>
          </Col>
        </Row></Container>
        </div>
    );
};

export default Banner;