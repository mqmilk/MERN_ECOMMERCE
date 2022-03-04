import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ProductItem from '../categoryshop/product-item/ProductItem';

const ProductSearch = () => {
    const [searchedProducts, setSearchedProducts] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/products/search/${name}`;
        const fetchData = async() => {
          const { data } = await axios.get(url);
          //console.log(data.products)
          setSearchedProducts(data.products);
        };
        fetchData();
      }, [name]);

    return (
        <Container className='mt-2'>
            <Row>
            {searchedProducts
                        .map((item) => (
                <Col md={6} lg={3}>
                    <ProductItem key={item._id} item={item} />
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductSearch;