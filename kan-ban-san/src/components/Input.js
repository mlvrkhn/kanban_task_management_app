/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Input({ name, required, handleChange, placeholder, inputs }) {
    console.log(name);
    return (
        <input
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            style={inputStyle}
            value="{inputs[name]}"
        />
    );
}
const inputStyle = {
    margin: '5px',
};

// add label for input
