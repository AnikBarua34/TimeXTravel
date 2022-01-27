import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
import { HiExternalLink} from 'react-icons/hi';
import Rating from 'react-rating';

const Product = ({product}) => {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:2000,
        easing:'ease',
    });
})
    const {userName,img,rating,description,_id,location,date} = product;
    return (
        <div className="product-container">
            
              <Col className="card-body">
            <div data-aos="zoom-in"><Card style={{height:"600px"}} className="card" border="primary"> 
        <Card.Img  variant="top" src={img}/>
        <Card.Body >
          <Card.Title className="text-primary fw-bold">{userName}</Card.Title>
          <Card.Text className="text-danger">Location: {location}</Card.Text>
          <Card.Text className="text-danger fw-bold">Date: {date}</Card.Text>
          <Card.Text >{description}</Card.Text>
          <Card.Text ><Rating className="text-warning" readonly initialRating={rating}
           emptySymbol="far fa-star"
           fullSymbol="fas fa-star"
        ></Rating></Card.Text>
          

          {/* dynamic route */}

          <Link to={`/buynow/${_id}`}
          ><button className="btn btn-primary"><span className="text-warning"></span> <span style={{fontSize:'15px'}}><HiExternalLink/></span>See More Details</button></Link>
        </Card.Body>
      </Card>
      </div>
    </Col>
              
        </div>
    );
};

export default Product;