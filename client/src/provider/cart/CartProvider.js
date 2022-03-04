import React from 'react';
import { useState, useEffect } from 'react';

import CartContext from '../../contexts/CartContext';
import useLocalStorage from '../../customHooks/LocalStorage';

const addItemToCart = (cartItems, item, quantity) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === item._id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem._id === item._id
                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem
        );
    }

    return [...cartItems, { ...item, quantity: quantity }];
};

const removeItemFromCart = (cartItems, item) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === item._id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem =>
            cartItem._id !== item._id);
    }

    return cartItems.map(cartItem => 
        cartItem._id === item._id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        :cartItem)
};

const getCartCount = (cartItems) => 
    cartItems.reduce(
        (sum, cartItem) => sum + cartItem.quantity,
        0)


const getCartTotal = (cartItems) => 
    cartItems.reduce(
        (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
        0)

const clearItemFromCart = (cartItems, item) => 
        cartItems.filter(cartItem => cartItem._id !== item._id)


const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = (item, quantity) => setCartItems(addItemToCart(cartItems, item, quantity));
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));
    const clearCart = () => setCartItems([]);

    useEffect(() => {
        setCartCount(getCartCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                hidden,
                cartItems,
                cartCount,
                cartTotal,
                toggleHidden,
                addItem,
                removeItem,
                clearItem,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;