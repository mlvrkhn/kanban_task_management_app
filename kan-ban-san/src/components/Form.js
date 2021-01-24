/* eslint-disable react/prop-types */
/* eslint-disable default-case */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Input from './Input';
import inputFields from '../../data/inputFields';
import useLocalStorage from '../hooks';

export default function Form(props) {
    const [cards] = useLocalStorage('cards');
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
            console.log('last id', cards);
            if (cards.length === 0) {
                console.log('kurs');
                return 1;
            }
            console.log('dlugosc kart', cards.length);
            return cards.length + 1; // nie dziala bo dostaje zawsze domyslna wartosc czyli dwa, dopiero po odswiezeniu wiecej. jak dostac tutaj ostatnią wartość?
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
        console.log('🚀 ~ handleSubmit ~ newCard', newCard);
        setCards((prev) => {
            return [...prev, newCard];
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
