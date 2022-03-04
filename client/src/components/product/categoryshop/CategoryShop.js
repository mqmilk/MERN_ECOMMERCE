import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


import CollectionContext from '../../../contexts/CollectionContext';
import ProductPreview from './product-preview/ProductPreview';


const CategoryShop = ({ }) => {
    const { categories } = useContext(CollectionContext);
    const { category } = useParams();
    return (
        <Container className='mt-3'>
            {category ?
                (categories
                    .filter(collection => collection.title === category)
                    .map((collection) => (
                        <ProductPreview key={collection._id} collection={collection} />
                    ))) :
                (categories.map((collection) => (
                    <ProductPreview key={collection._id} collection={collection} />
                )))
            }
        </Container>
    );
};

export default CategoryShop;