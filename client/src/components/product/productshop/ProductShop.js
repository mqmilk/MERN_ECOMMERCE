import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductCard from './product-card/ProductCard';
import ProductItem from '../categoryshop/product-item/ProductItem';
import CollectionContext from '../../../contexts/CollectionContext';

const ProductShop = () => {
    const { products } = useContext(CollectionContext);
    const { productID } = useParams();
      
    
    return (
        <Container className='mt-2'>
            <Row>
            { productID ? 
                (products
                    .filter(product => product._id === productID)
                    .map((item) => (
                        <ProductCard key={item._id}  item={item}/>
                    ))) :
                    (products
                        .map((item) => (
                            <Col md={6} lg={3}>
                            <ProductItem key={item._id}  item={item}/>
                            </Col>
                        )))
            } 
            </Row>
        </Container>
    );
};

export default ProductShop;