import React, { useEffect,  useState } from 'react';
import { Card, Col, Row,Button,Spinner  } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Head';
import './BuyNow.css';

const BuyNow = () => {
    const {productId} =useParams();

    const [singleProducts,setSingleProducts] =useState([]);
    const [singleProduct,setSingleProduct] =useState({});

    // LOADING DATA BY ID 
    useEffect(()=>{
      fetch('https://timextravel.herokuapp.com/getAllBlogs')
        .then(res=>res.json())
        .then(data=>setSingleProducts(data))
    },[])

    useEffect(()=>{
        const foundProduct = singleProducts.find(product=> product._id == productId)
        setSingleProduct(foundProduct)
    },[singleProducts])


   
    return (
      <>
      <Header></Header>
        <div className="mt-5 m-5 pt-4">
            <h3 className="buy text-dark p-2 mb-3 rounded-3 shadow-3">Travellers FeedBacks</h3>
            
            {
                !singleProduct?.img && <Button variant="danger">
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Please wait a moment......
              </Button>
            }
            <Row>
            <Col className="mb-3" xs={12} md={12} lg={12}>
      <Card border="primary"> 
        <Card.Img className="mx-auto" style={{width:"250px"}} variant="top" src={singleProduct?.img} />
        <Card.Body>
          <Card.Title className="text-primary fw-bold">Name : {singleProduct?.userName}</Card.Title>
          <Card.Text className="text-danger fw-bold">Total Spended Money :BDT {singleProduct?.expenses}</Card.Text>
          <Card.Text className="text-danger fw-bold">Duration: {singleProduct?.duration}</Card.Text>
          <Card.Text >{singleProduct?.description}</Card.Text>
          <Link to="/home#products"
          ><button className="btn btn-primary"> <span className="text-warning"></span> See Another users Feedback</button></Link>
          </Card.Body>
      </Card>
    </Col>
            </Row>
          

        </div>
        </>
    );
};

export default BuyNow;