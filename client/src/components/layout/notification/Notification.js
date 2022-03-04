import React from 'react';

import Container from 'react-bootstrap/Container';

const Notification = (props) => {
    return (
        <Container fluid className='bg-info text-center p-1'>
            {props.announcement}
        </Container>
    );
};


export default Notification;