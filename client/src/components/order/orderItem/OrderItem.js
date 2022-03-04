import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import OrderProduct from '../orderProduct/OrderProduct';

const OrderItem = ({ order }) => {
    const { cart } = order;
    return (
        <>
            <Row className='d-flex align-items-center border bg-light mt-2'>
                <Col xs={6} md={3} className='d-flex flex-column'>
                    <p>Order Placed:</p>
                    <p>{order.created.slice(0, 10)}</p>
                </Col>
                <Col xs={6} md={3} className='d-flex flex-column'>
                    <p>Total:</p>
                    <p>{order.total}</p>
                </Col>
                <Col xs={12} md={6} className='d-flex flex-column '>
                    <p>Order#:</p>
                    <Link to={`/orders/${order._id}`}>{order._id}</Link>
                </Col>
            </Row>
            <Row className='border px-5 pt-1'>
                <Col className='d-flex flex-column'>
                    {cart.map((item) => (<OrderProduct item={item} />))}
                </Col>
            </Row>
        </>
    );
};

export default OrderItem;