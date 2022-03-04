import React from 'react';
import Container from 'react-bootstrap/Container';

import Category from './category/Category';



const HomePage = () => {
    
    return (
        <Container className='mt-5'>
            <Category />
        </Container>
    )
};

export default HomePage;