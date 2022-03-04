import React from 'react';
import Image from 'react-bootstrap/Image';

import CustomButton from '../../button/CustomButton';
import './menuitem.scss';

const CategoryItem = ({item}) => {
    const {title, products} = item;
    return (         
        <div className='d-flex justify-content-center align-items-center 
                        border border-black me-1 menu-item'>
            <Image src={`${products[0].imageUrl}`}  className='background-image'  /> 
            
            <div className='d-flex flex-column justify-content-center align-items-center 
                            p-4 opacity-75 content'>
                <h1 className='fs-3 text-danger fw-bold'>{title.toUpperCase()}</h1>
                <CustomButton 
                    className='fs-6 fw-lighter btn-light'
                    text='SHOP NOW'
                    link={`/shop/${title.toLowerCase()}`}
                />
            </div>
        </div>
    );
};

export default CategoryItem;
