/* eslint-disable indent */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { CardContext, MoveTaskContext } from './context';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
    const [cards, setCards] = useLocalStorage('cards');
    useEffect(() => {
        setCards(cards);
    }, [cards]);

    return (
        <CardContext.Provider value={cards}>
            <MoveTaskContext.Provider value={setCards}>
                <Board />
            </MoveTaskContext.Provider>
        </CardContext.Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
