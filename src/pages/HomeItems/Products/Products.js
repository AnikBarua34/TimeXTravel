import React, { useEffect, useState } from 'react';
import { Row, Spinner, Button, Col, Card } from 'react-bootstrap';
import Product from '../Product/Product';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Products.css';
import { HiExternalLink } from 'react-icons/hi';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const Products = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 2000,
            easing: 'ease',
        });
    })
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pageVisited = pageNumber * userPerPage;
    const displayExperiences = products
        .slice(pageVisited, pageVisited + userPerPage)




    useEffect(() => {
        fetch('https://timextravel.herokuapp.com/getAllBlogs')

            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 50)))
    }, [])
    const pageCount = Math.ceil(products.length / userPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (

        <div id="products" className="mt-3 p-2">
            <div data-aos="zoom-in"> <h5 className="product text-dark fw-bold rounded-3 m-3 p-2"> Our Travellers Experiences </h5></div>
            {
                products.length < 1 ? <Button variant="danger">
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
                            displayExperiences.map(product => <Product key={product._id} product={product}


                            ></Product>)
                        }

                    </Row>
            }
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
        </div>

    );
};

export default Products;