/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Input(props) {
    const { name, required, changeHandler, placeholder, inputValue } = props;

    return (
        <input
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={(e) => changeHandler(e.target)}
            style={inputStyle}
            value={inputValue[name]}
        />
    );
}
const inputStyle = {
    width: '100%',
    height: '30px',
    fontSize: '20px',
};

// add label for input
