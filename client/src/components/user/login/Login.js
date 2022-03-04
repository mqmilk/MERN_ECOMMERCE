import React from 'react';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


import Input from '../../input/Input';
import CustomButton from '../../button/CustomButton';
import UserContext from '../../../contexts/UserContext';

const Login = () => {
    const { login } = useContext(UserContext);
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate ();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        login(inputs);
        navigate('/');        
    } 


    return (

        <Container className='mt-3'>
            <Row className='d-flex flex-column'>
                <h1 className='mt-4'>Login</h1>
                <hr />
                <Col lg={6} >

                    <Form onSubmit={handleSubmit}>
                        <Input
                            label="Username"
                            className="mb-3"
                            type="text"
                            name="username"
                            value={inputs.username || ""}
                            placeholder="Enter Your Username"
                            handleChange={handleChange}
                        />
                        <Input
                            label="Password"
                            className="mb-3"
                            type="password"
                            name="password"
                            value={inputs.password || ""}
                            placeholder="Enter Your Password"
                            handleChange={handleChange}
                        />
                        <div className='d-flex justify-content-between'>
                            <CustomButton
                                type="submit"
                                text="Login"
                                className="btn-info btn-lg px-5"
                            />
                            <CustomButton
                                type="button"
                                text="Create an Account"
                                link="/register"
                                className="btn-warning btn-lg px-5"
                            />
                        </div>

                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;