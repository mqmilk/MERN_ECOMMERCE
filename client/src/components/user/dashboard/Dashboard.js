import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import UserContext from '../../../contexts/UserContext';

const Dashboard = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                <div className='d-flex justify-content-around align-items-end'>
                    <h1>My Profile</h1>
                    <Link to="/orders">View All Orders</Link>
                </div>
                <Col xs={8} lg={4} className='d-flex flex-column align-items-center justify-content-center border m-2  px-5 py-2'>            
                    <div>
                        <h4>Username</h4>
                        <p>{currentUser.username}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{currentUser.email}</p>
                        <h4>token</h4>
                        
                    </div>  
                    <Link to='/' >Edit</Link>              
                </Col>
                <Col xs={8} lg={4}  className='d-flex flex-column align-items-center justify-content-center border m-2 px-5 py-2'>                        
                        <div>
                        <h4>Password</h4>
                        <p>********</p>
                        <Link to="/">Change Password</Link>
                    </div>             
                </Col>
                
            </Row>
        </Container>
    );
};

export default Dashboard;