import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UserContext from '../../../contexts/UserContext';
import OrderItem from '../orderItem/OrderItem';

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const { token } = useContext(UserContext);
    const { orderID } = useParams();
    const url = `http://localhost:5000/order`;
    const config = {
        headers: { Authorization: `${token}` }
    }

    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get(url, config);
                //console.log(res.data.order)
                setOrders(res.data.order)
            };
            fetchData();
        } catch (error) {
            alert(error);
        }
    }, [])

    return (
        <Container>
            <Row className='justify-content-center ms-1'>
                <Col xs={12} md={9}>
                    {orderID ? (
                        orders
                        .filter(collection => collection._id === orderID)
                        .map((order) =>
                        (<OrderItem key={order._id} order={order} />)
                    )
                    ) : (
                        orders.map((order) =>
                        (<OrderItem key={order._id} order={order} />)
                    )
                    )
                    }
                    
                </Col>
            </Row>

        </Container>
    );
};

export default OrderDetails;
