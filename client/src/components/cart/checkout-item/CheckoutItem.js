import React from 'react';
import { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Input from '../../input/Input';
import CustomButton from '../../button/CustomButton';
import CartContext from '../../../contexts/CartContext';
import './checkoutitem.scss'

const CheckoutItem = ({ item }) => {
    const { addItem, removeItem, clearItem } = useContext(CartContext);
    return (
        <Row className='d-flex align-items-center justify-content-between 
            checkout-item mb-3 fs-6 w-100 h-100'>
            <Col xs={4} md={3} lg={2}>
                <Image src={`${item.imageUrl}`} className='w-100 h-100' />
            </Col>
            <Col xs={8} md={9} lg={10} className='d-md-flex justify-content-between'>

                <Link className='name fs-6 text-decoration-none'
                    to={`/products/${item._id}`}>{item.name}</Link>
                <div className='price'>
                    {`$${item.price}`}
                </div>
                <Col sm={8} md={6} lg={3}>
                    <div className='d-flex'>
                        <CustomButton
                            className="btn-sm btn-secondary"
                            icon="fa fa-minus"
                            handleClick={() => removeItem(item)}
                        />
                        <Input
                            type="text"
                            value={item.quantity}
                        />
                        <CustomButton
                            className="btn-sm btn-secondary"
                            icon="fa fa-plus"
                            handleClick={() => addItem(item, 1)}
                        />
                    </div>
                </Col>
                <CustomButton
                    className="btn-sm btn-danger"
                    icon="fa fa-trash"
                    handleClick={() => clearItem(item)}
                />
            </Col>
        </Row>
    );
};


export default CheckoutItem;