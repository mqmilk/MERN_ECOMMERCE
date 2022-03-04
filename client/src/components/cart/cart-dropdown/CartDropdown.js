import React from 'react';
import { useContext } from 'react';

import CartContext from '../../../contexts/CartContext';
import CustomButton from '../../button/CustomButton';
import CartItem from '../cart-item/CartItem';
import './cartdropdown.scss'

const CartDropdown = () => {
    const { cartItems, cartTotal, toggleHidden } = useContext(CartContext);

    return (
        <div className='border d-flex flex-column p-4 cart-dropdown bg-dark text-white'>
            {
                cartItems.length ? (
                    cartItems.map(item => (
                        <div className='d-flex flex-column cart-items'>
                            <CartItem key={item._id} item={item} />
                        </div>
                    ))
                ) :
                    (<p>Your Cart is Empty</p>)
            }
            <div className='mt-auto d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                    <p>Total:</p>
                    <p className=''>{`$${cartTotal}`}</p>
                </div>
            
                    <CustomButton
                        text='Checkout'
                        onClick={toggleHidden}
                        className='btn-lg px-5'
                        link='/checkout'
                    />
            
            </div>
        </div>
    );
};

export default CartDropdown;