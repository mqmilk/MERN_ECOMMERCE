import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <Container fluid className='bg-info fixed-bottom text-center'>
             <span>&copy; {new Date().getFullYear()} MERN</span>
        </Container>
    );
};

export default Footer;