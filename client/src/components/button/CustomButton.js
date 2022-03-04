import React from 'react';

import Button from 'react-bootstrap/Button';

const CustomButton = (props) => {
    const {
        type,
        className,
        text,
        variant,
        link,
        icon,
        handleClick
      } = props;
    return (
        <Button 
            className={className} 
            type={type}
            variant={variant}
            href={link}
            onClick={handleClick}
        >
            {icon && <i className={icon}></i>}
            {text && <span className='px-2'>{text}</span>}               
        </Button>
    );
};

export default CustomButton;