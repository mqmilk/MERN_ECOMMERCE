import React from 'react';
import { useState, useContext } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import CustomButton from '../../../button/CustomButton';
import Input from '../../../input/Input';
import CartContext from '../../../../contexts/CartContext';
import './card.scss';

const ProductCard = ({item}) => {
    const { imageUrl, price, name, description } = item;
    const { addItem } = useContext(CartContext);
    const [input, setInput] = useState(1);
    const increase = () => {
        setInput(input => input + 1);
    }
    const decrease = () => {
        setInput(input => input - 1);
    }
    return (
        <Row className='d-flex justify-content-center align-items-center w-100'>
            <Col md={4}>
                <Carousel>
                    {imageUrl.map(image => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100 image"
                                src={`${image}`}
                                alt="slide"
                            />
                            <Carousel.Caption>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
            <Col md={8}>
                <div>
                    <div className='fs-2 text-primary'>{name}</div>
                    <div className='fs-4'>{description}</div>
                    <div className='fs-4'>{`$${price}`}</div>
                    
                    <div className='d-flex'>
                        <div className="me-auto mb-2">
                        <Col xs={6}>
                            <div className='d-flex'>
                                <CustomButton
                                    className="btn btn-secondary"
                                    icon="fa fa-minus"
                                    handleClick={decrease}
                                />
                                <Input
                                    type="text"
                                    placeholder="1"
                                    name="quantity"
                                    min={1}
                                    value={input}
                                />
                                <CustomButton
                                    className="btn btn-secondary"
                                    icon="fa fa-plus"
                                    handleClick={increase}
                                />
                            </div>
                            </Col>
                            <div className='mt-3'>
                                <CustomButton
                                    className="btn btn-lg btn-info px-3"
                                    icon="fa fa-shopping-bag"
                                    text="Add to Cart"
                                    handleClick={ () => addItem(item, input) } />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Col>


        </Row>


    );
};

export default ProductCard;