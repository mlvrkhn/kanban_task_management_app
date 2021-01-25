/* eslint-disable react/prop-types */
/* eslint-disable default-case */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Input from './Input';
import inputFields from '../../data/inputFields';

export default function Form(props) {
    const { setCards } = props;
    const initialInputValues = () => {
        const initValues = {};

        inputFields.forEach(({ name, value }) => {
            initValues[name] = value;
        });
        return initValues;
    };

    const [inputValue, setInputValue] = useState(initialInputValues);

    const createCardObject = () => {
        const getLastID = () => {
            return uuid();
        };

        return {
            name: inputValue.taskName,
            task: inputValue.taskDescription,
            owner: inputValue.taskOwner,
            columnId: 1,
            color: '#ffc8dd',
            id: getLastID(),
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCard = createCardObject();
        setCards((currCards) => {
            return [...currCards, newCard];
        });
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
