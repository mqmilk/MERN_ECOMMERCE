import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Input from '../../input/Input';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CollectionContext from '../../../contexts/CollectionContext';
import UserContext from '../../../contexts/UserContext';
import CartContext from '../../../contexts/CartContext';
import CustomButton from '../../button/CustomButton';
import CartIcon from '../../cart/cart-icon/CartIcon';
import CartDropdown from '../../cart/cart-dropdown/CartDropdown';

const Header = () => {
    const { categories } = useContext(CollectionContext);
    const { token, logout } = useContext(UserContext);
    const { hidden } = useContext(CartContext);
    const [input, setInput] = useState();
    const navigate = useNavigate ();

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/products/search/${input}`);        
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/" >MERN</Navbar.Brand>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Input
                        type="search"
                        placeholder="Search Product"
                        className="me-1"
                        aria-label="Search"
                        value={input}
                        handleChange={handleChange}
                    />
                    <CustomButton
                        type="submit"
                        variant="outline-success"
                        icon="fa fa-search" />
                </Form>
                <div className='d-flex align-items-center justify-content-around'>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className='d-flex ms-auto'
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="SHOP" id="navbarScrollingDropdown">
                                <NavDropdown.Item href={`/shop`}>OVERVIEW</NavDropdown.Item>
                                <NavDropdown.Divider />
                                {
                                    categories.map(({ id, title }) => (
                                        <NavDropdown.Item key={id} href={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</NavDropdown.Item>
                                    ))
                                }
                            </NavDropdown>
                            

                        </Nav>
                    </Navbar.Collapse>
                    
                    <Nav.Link href="/">CONTACT</Nav.Link>
                    {token ? (<NavDropdown title={<span><i className="fa fa-user fa-fw"></i> ACCOUNT</span>} id="navbarScrollingDropdown">
                        <NavDropdown.Item href={`/account`}>PROFILE</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => logout()}>LOGOUT</NavDropdown.Item>
                    </NavDropdown>) : <Nav.Link href="/login"><span><i className="fa fa-user fa-fw"></i> LOGIN</span></Nav.Link>
                    }
                    <Nav.Link href=""><CartIcon /></Nav.Link>
                </div>
            </Container>
            {!hidden && <CartDropdown />}
        </Navbar>
    );
};

export default Header;