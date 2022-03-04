import React from 'react';
import { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Input from '../../input/Input';
import CustomButton from '../../button/CustomButton';
import CartContext from '../../../contexts/CartContext';

const CartItem = ({ item }) => {
    const { addItem, removeItem } = useContext(CartContext);
    return (
        <Row className='d-flex align-items-center justify-content-between 
            cart-item mb-3 px-1 fs-6 w-100'>
            <Col xs={4}>
                <Image src={`${item.imageUrl}`} className='w-100' />
            </Col>
            <Col xs={8}>
                <Link className='name fs-6 text-decoration-none'
                    to={`/products/${item._id}`}>{item.name}</Link>
                <div className='price'>
                    {`$${item.price}`}
                </div>
                <Col xs={10}>
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
                
            </Col>
        </Row>
    );
};


export default CartItem;