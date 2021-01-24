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

    const kartki = [
        {
            id: 1,
            columnId: 1,
            name: 'testiwssso',
            color: '#ffc8dd',
            task: 'walk the dog',
            owner: 'martin',
        },
        {
            id: 2,
            columnId: 1,
            name: 'testiwo 2',
            color: '#ffc8dd',
            task: 'walk the dog',
            owner: 'mar',
        },
    ];

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
