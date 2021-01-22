/* eslint-disable default-case */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Input from './Input';
import inputFields from '../../data/inputFields';
// import { useLocalStorage } from '../hooks';

export default function Form() {
    const initialInputValues = () => {
        const initValues = {};

        inputFields.forEach(({ name, value }) => {
            initValues[name] = value;
        });
        return initValues;
    };

    const [inputValue, setInputValue] = useState(initialInputValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };

    const changeHandler = ({ name, value }) => {
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const renderInputFields = () => {
        return inputFields.map((input) => {
            const { name, required, placeholder } = input;
            return (
                <Input
                    name={name}
                    key={name}
                    changeHandler={changeHandler}
                    placeholder={placeholder}
                    required={required}
                    inputValue={inputValue}
                />
            );
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Add Card</h2>
            {renderInputFields()}
            <button type="submit" className="form-submit-button button">
                Submit
            </button>
        </form>
    );
}
