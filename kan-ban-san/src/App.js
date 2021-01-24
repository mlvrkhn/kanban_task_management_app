/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import CardContext from './context/context';
import useLocalStorage from './hooks';

export default function App() {
    const [storage, setStorage] = useLocalStorage('cards');
    const [cards, setCards] = useState(storage);

    useEffect(() => {
        setStorage(cards);
    }, [cards]);

    return (
        <CardContext.Provider value={cards}>
            <Board setCards={setCards} />
        </CardContext.Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
