import React from 'react';
import Image from 'react-bootstrap/Image';

import CustomButton from '../../../button/CustomButton';
import './collectionItem.scss';


const ProductItem = ({ item }) => {
    return (
        <div className='d-flex flex-column align-items-center 
                        border border-dark pb-2 mb-3 max-vh-100 collection-item'>
            <Image src={`${item.imageUrl[0]}`} className='w-100 mb-1 image' />

            <div className='w-100 d-flex justify-content-between align-items-center fs-6 px-1 collection-footer'>
                <span className='w-90'>{item.name}</span>
                <span className='w-10'>{`$${item.price}`}</span>
                
            </div>
            { <span className='custom-button w-80'>
                    <CustomButton
                        className='fs-6 fw-lighter btn-info opacity-75'
                        text='SHOP NOW'
                        link={`/products/${item._id}`}
                    />
                </span>  
                }
        </div>
    );
};

export default ProductItem;