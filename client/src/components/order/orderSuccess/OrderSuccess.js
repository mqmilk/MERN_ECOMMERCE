import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomButton from '../../button/CustomButton';

const OrderSuccess = () => {
    const { orderID } = useParams();
    return (
        <Container>
            <Row className='d-flex justify-content-center mt-4'>
                <Col md={8}>
                    {orderID ? (
                        <div>
                            <div className='d-flex justify-content-around align-items-end'>
                                <h1>Thank you for your order.</h1>
                                <CustomButton
                                    text={`Order# ${orderID}`}
                                    className='btn-success mb-2 px-0'
                                    link={`/orders/${orderID}`}
                                />
                            </div>
                            <div className='d-flex justify-content-around mt-4'>
                                <CustomButton
                                    text='View All Orders'
                                    className='btn-info mb-2 btn-lg px-0'
                                    link='/orders'
                                />
                                <CustomButton
                                    text='Continue Shopping'
                                    className='btn-info mb-2 btn-lg px-0'
                                    link='/shop'
                                />
                            </div>
                        </div>
                    ) : (
                        <div>Wrong Page</div>
                    )}
                </Col>
            </Row>
        </Container >
    )
}

export default OrderSuccess;