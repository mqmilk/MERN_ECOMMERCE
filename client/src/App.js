import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import Layout from './components/layout/Layout';
import CategoryShop from './components/product/categoryshop/CategoryShop';
import ProductShop from './components/product/productshop/ProductShop';
import ProductSearch from './components/product/productshop/ProductSearch';
import CheckOut from './components/cart/CheckOut';
import Login from './components/user/login/Login';
import Register from './components/user/signup/Register';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Dashboard from './components/user/dashboard/Dashboard';
import OrderSuccess from './components/order/orderSuccess/OrderSuccess';
import OrderDetails from './components/order/orderDetails/OrderDetails';


function App() {

  return (


    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<CategoryShop />} />
        <Route path='shop/:category' element={<CategoryShop />} />
        <Route path='products' element={<ProductShop />} />        
        <Route path='products/:productID' element={<ProductShop />} />
        <Route path='products/search/:name' element={<ProductSearch />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        
        <Route
          path='checkout'
          element={
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          }
        />
        <Route
          path='account'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='order/success/:orderID'
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          path='orders'
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path='orders/:orderID'
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        

      </Route>
    </Routes>


  );
}

export default App;
