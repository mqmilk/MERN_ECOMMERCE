import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import Input from '../input/Input';
import CustomButton from '../button/CustomButton';
import CartContext from '../../contexts/CartContext';
import CheckoutItem from './checkout-item/CheckoutItem';
import StripeButton from '../button/StripeButton';


const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <Container>
        <Row className='d-flex flex-column p-4 mx-md-5'>
            <Col>
            {
                cartItems.length ? (
                    cartItems.map(item => (
                        <CheckoutItem key={item._id} item={item} />
                    ))
                ) :
                    (<p>Your Cart is Empty</p>)
            }

            <div className='mt-auto d-md-flex flex-column'>
                <div className='d-flex justify-content-end fs-2'>
                    <p>Total:</p>
                    <p className='px-1'>{`$${cartTotal}`}</p>
                </div>
                <div className='d-flex justify-content-around fs-3'>
                    <CustomButton
                        text='Continue Shopping'
                        className='btn-info mb-2 btn-lg px-0'
                        link='/'
                    />
                    <StripeButton
                        price={cartTotal}
                        className='btn-info btn-lg px-5'
                    />
                </div>
            </div>
            </Col>
        </Row>
        </Container>
    );
};

export default CheckOut;