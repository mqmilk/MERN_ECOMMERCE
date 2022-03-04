import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const OrderProduct = ({ item }) => {
    return (
        <Row className='d-flex align-items-center  mb-3 fs-6'>
            <Col xs={6} md={4} lg={2} className=''>
                <Image src={`${item._id.imageUrl}`} className='w-75' />
            </Col>
            <Col xs={6} md={8} lg={10} className='d-md-flex flex-column align-items-start justify-content-start'>
                <Link className='name fs-6 text-decoration-none'
                    to={`/products/${item._id._id}`}>{item._id.name}</Link>
                <div className='price'>
                    {`$${item._id.price}`}
                </div>
                <div className='price'>
                    quantity: {item.quantity}
                </div>
            </Col>
        </Row>
    );
};


export default OrderProduct;