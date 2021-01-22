/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Input from './Input';
import inputFields from '../../data/inputFields';

export default function Form() {
    const initialInputs = inputFields.map((field) => {
        const initialState = {};
        const { name } = field;

        if (!inputs) {
            initialState[name] = '';
        } else {
            initialState[name] = inputs[name];
        }
        console.log(initialState);
        return initialState;
    });
    const [inputs, setInput] = useState(initialInputs);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const changeHandler = (name, value) => setInput({ ...inputs, name: value });

    const renderInputFields = () => {
        return inputFields.map((input) => {
            const { name, required, placeholder } = input;
            return (
                <Input
                    name={name}
                    key={name}
                    handleChange={changeHandler}
                    placeholder={placeholder}
                    required={required}
                    inputs={inputs[name]}
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
