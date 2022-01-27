import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddProduct = () => {
     // Add New Product Section 
     const nameRef = useRef();
     const priceRef = useRef();
     const descriptionRef = useRef();
     const imgRef = useRef();
     const travellerRef = useRef();
     const categoryRef = useRef();
     const locationRef = useRef();


     const handleAddProduct =e=>{
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const description =  descriptionRef.current.value;
        const img =  imgRef.current.value;
        const traveller =  travellerRef.current.value;
        const category =  categoryRef.current.value;
        const location =  locationRef.current.value;
       
        
        e.preventDefault();
           
        
        const newProduct = {name,price, description,img,traveller,category,location}
        
        fetch('https://timextravel.herokuapp.com/postAllBlogs',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          
          body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            // alert('Product Added Successfully, Check Dashboard')
                   // import Swal from 'sweetalert2';
                   Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product added successfully !',
                    showConfirmButton: false,
                    timer: 2000
                  })
            e.target.reset();
          }
        })
            }
    return (
        <div>
            <h5 className="bg-success text-light rounded-3 m-3 p-2">Add a new Blog in your page</h5>
            <form onSubmit={handleAddProduct}  className="booking-form" >
           
            <Row>
            <Col className="mt-2" xs={12} md={12} lg={12}>
              <input required style={{width:'85%'}}  type="text" ref={imgRef} placeholder="Enter any Travel Image URL"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input  style={{width:'85%'}} type="text" ref={nameRef} placeholder="Enter Title"  /> 
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}} type="text" ref={travellerRef} placeholder="Enter Traveller Info "/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <textarea style={{width:'85%'}}  type="text" ref={descriptionRef} placeholder="Enter Description" cols="15" rows="5"></textarea>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}} type="text" ref={categoryRef} placeholder="Enter Category "/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}} type="text" ref={priceRef} placeholder="Enter Cost Of Travel "/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}} type="text" ref={locationRef} placeholder="Enter Location Address "/>
              </Col>
              
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}}className="btn btn-dark mx-auto" type="submit" value="Add This Product"/>
              </Col>
              

            </Row>
 
                </form>
        </div>
    );
};

export default AddProduct;