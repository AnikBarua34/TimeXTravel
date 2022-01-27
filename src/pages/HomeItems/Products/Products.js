import React, { useEffect, useState } from 'react';
import { Row, Spinner,Button } from 'react-bootstrap';
import Product from '../Product/Product';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Products.css';
const Products = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
            easing:'ease',
        });
    })
    const [products,setProducts] = useState([]);


    useEffect(()=>{
        fetch('https://timextravel.herokuapp.com/getAllBlogs')
        
        .then(res=>res.json())
        .then(data=> setProducts(data.slice(0,10)))
    },[])
    
    return (
        
        <div id="products" className="mt-3 p-2">
           <div data-aos="zoom-in"> <h5 className="product text-dark fw-bold rounded-3 m-3 p-2"> Our Travellers Experiences </h5></div>
            {
                products.length<1? <Button variant="danger">
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading......
              </Button>
              :
<Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
    {
        products.map(product=> <Product key={product._id} product={product}
        
        
        ></Product>)
    }
</Row>
            }
        </div>
        
    );
};

export default Products;