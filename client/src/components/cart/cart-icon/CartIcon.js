import React from 'react';
import { useContext } from 'react';

import CartContext from '../../../contexts/CartContext';
import './carticon.scss';

const CartIcon = () => {
    const { cartCount, toggleHidden } = useContext(CartContext);
    return (
        <div 
            className='cart d-flex aligh-items-center justify-content-center' 
            onClick={toggleHidden}
        >
            <i className='text-white fa fa-shopping-cart icon'></i>
            <span className='count text-info fw-bold fs-7'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;