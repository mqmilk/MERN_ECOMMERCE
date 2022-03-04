import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CollectionContext from '../../contexts/CollectionContext';

const ProductProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/shop';
        const fetchData = async() => {
          const {data} = await axios.get(url);
          //console.log(data.categories)
          setCategories(data.categories);
        };
        fetchData();
      }, []);


      useEffect(() => {
        const url = 'http://localhost:5000/products';
        const fetchData = async() => {
          const {data} = await axios.get(url);          
          //console.log(data.products)
          setProducts(data.products);
        };
        fetchData();
      }, []);

    
     
    

    
    return (
        <CollectionContext.Provider
            value={{
                categories,
                products,
            }}
        >
            {children}
        </CollectionContext.Provider>
    );
};

export default ProductProvider;