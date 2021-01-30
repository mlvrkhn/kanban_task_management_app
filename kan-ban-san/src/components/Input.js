/* eslint-disable no-use-before-define */

import React from 'react';
import PropTypes from 'prop-types';

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
Input.propTypes = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    changeHandler: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    inputValue: PropTypes.shape({
        taskName: PropTypes.string.isRequired,
        taskOwner: PropTypes.string.isRequired,
        taskDescription: PropTypes.string.isRequired,
    }),
};
Input.defaultProps = {
    inputValue: PropTypes.object.isRequired,
};

// add labels
// try useRef to hide the buttons
