import React from 'react';

import Form from 'react-bootstrap/Form';


const Input = (props) => {
    const {
        type,
        value,
        placeholder,
        label,
        name,
        arialabel,
        handleChange,
        min,
        className
      } = props;
    return (
            <>
                {label && <Form.Label>{label}</Form.Label>}
                <Form.Control
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className={className}
                    min={min}
                    aria-label={arialabel}
                    onChange={handleChange} />
            </>

    );
};

export default Input;