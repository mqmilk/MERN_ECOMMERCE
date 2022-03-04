import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import CustomButton from './CustomButton';
const StripeButton = ({ price, className }) => {
    const navigate = useNavigate();
    const priceForStripe = Math.round(price * 100);
    const { token } = useContext(UserContext);
    const { cartItems, cartTotal, clearCart } = useContext(CartContext);

    const publishableKey = 'pk_test_51KXZ43HwZjGklmgPA8VqNJfz1zS0aeVN2SuWKNrErvk0iaPBicmGMgUltRxeHzkI2ZPBLuOWyATR12hSodxaRkf600KhL2pK9a';
    const onToken = async (tokenStr) => {
        const url1 = 'http://localhost:5000/payment/process';
        const payment = {
            amount: priceForStripe,
            token: tokenStr
        };
        const url2 = 'http://localhost:5000/order/add';
        const order = {
            cart: cartItems,
            total: cartTotal,
        };
        const config = {
            headers: { Authorization: `${token}` }
        };
        try {
            const res1 = await axios.post(url1, payment, config);
            //console.log(res1.data)
            const res2 = await axios.post(url2, order, config);
            clearCart();
            console.log(res2.data.order._id)
            navigate(`/order/success/${res2.data.order._id}`)
        } catch (error) {
            alert(error);
        }
    };


    return (
        <StripeCheckout
            name='MERN'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        >
            <CustomButton text='Pay Now' className={className} />
        </StripeCheckout>
    )
}

export default StripeButton;