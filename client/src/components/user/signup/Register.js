import React from 'react';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import axios from 'axios';


import Input from '../../input/Input';
import CustomButton from '../../button/CustomButton';
import UserContext from '../../../contexts/UserContext';

const Register = () => {
    const { register } = useContext(UserContext);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    /*const handleSubmit = async (event) => {
        event.preventDefault();
        alert(inputs.username);
    }*/

    const handleSubmit = async (event) => {
        event.preventDefault();


        /*const res = await axios.post(
            url,
            inputs
        );
        console.log(res.data.user);*/
        register(inputs);
        navigate('/');
    } 


    return (

        <Container className='mt-3'>
            <Row className='d-flex flex-column'>
                <h1 className='mt-4'>Register</h1>
                <hr />
                <Col md={6}>

                    <Form >
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
                            label="Email"
                            className="mb-3"
                            type="email"
                            name="email"
                            value={inputs.email || ""}
                            placeholder="Enter Your Email"
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


                        <CustomButton
                            type="submit"
                            text="Register"
                            className="btn-info btn-lg px-5"
                            handleClick={handleSubmit}
                        />


                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;