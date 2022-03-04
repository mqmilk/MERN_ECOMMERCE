import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';

import CategoryItem from '../category-item/CategoryItem';
import CollectionContext from '../../../contexts/CollectionContext';

const Category = () => {
    const { categories } = useContext(CollectionContext);
    return (
        <Row className='d-flex flex-wrap justify-content-evenly align-items-center'>
            {
                categories.map((item) => (
                    <Col md={6} xl={4} className='mb-lg-3'>
                    <CategoryItem key={item._id} item={item} />
                    </Col>
                ))
            }
        </Row>
    );
};

export default Category;