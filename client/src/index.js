import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import CartProvider from './provider/cart/CartProvider';
import ProductProvider from './provider/product/ProductProvider';
import UserProvider from './provider/user/UserProvider';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


