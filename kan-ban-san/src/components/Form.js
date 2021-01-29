/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Input from './Input';
import inputFields from '../../data/inputFields';
import MoveTaskContext from '../context/moveTaskContext';
import CardContext from '../context/cardContext';
import useLocalStorage from '../hooks/useLocalStorage';
import columns from '../../data/columns';

export default function Form() {
    const [cards, setCards] = useContext(CardContext);

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

        const colLlimit = columns[0].cardLimit;
        let nrOfCards = 0;

        // use reduce
        cards.forEach((card) => {
            if (card.columnId === columns[0].id) {
                nrOfCards += 1;
            }
        });

        if (nrOfCards < colLlimit) {
            console.log('setting');
            setCards((c) => {
                return [...c, newCard];
            });
        } else {
            console.log('LIMIT REACHED!');
        }

        // clearInputFields();
    };

    const clearInputFields = () => {
        setInputValue({
            ...inputValue,
            taskName: '',
            taskOwner: '',
            taskDescription: '',
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
        <form onSubmit={handleSubmit} className="form-container" style={formStyle}>
            <section>{renderInputFields()}</section>
            <button type="submit" style={submitBtnStyle} className="form-submit-button button">
                Submit
            </button>
        </form>
    );
}
const submitBtnStyle = {
    width: '200px',
    height: '108px',
    backgroundColor: '#fb6376',
    fontSize: '25px',
    borderRadius: '3px',
    border: 'none',
    margin: '0 10px',
};
const formStyle = {
    display: 'flex',
};
