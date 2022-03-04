import { createContext } from "react";

const CartContext = createContext({
    hidden: true,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    toggleHidden: () => {},
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
    clearCart: () => {},
});

export default CartContext;