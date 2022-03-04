import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import ProductItem from '../product-item/ProductItem';


const ProductPreview = ({collection}) => {
    const {title, products} = collection;
    return (
        <Row className='mt-3'>
            <Link className='fs-2 mx-2 text-info text-decoration-none' 
                to={`/shop/${title}`}>{title.toUpperCase()}</Link>         
            { products
                .map(( item ) => (
                    <Col  md={6} lg={3}>
                        <ProductItem key={item._id} item={item} />
                    </Col>
                ))
            }
        </Row>
    );
};

export default ProductPreview;