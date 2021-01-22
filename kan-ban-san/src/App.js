/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import CardContext from './context/context';
import useLocalStorage from './hooks';

export default function App() {
    const [getItem, setItem] = useLocalStorage('name');
    const cards = [
        {
            id: 1,
            columnId: 1,
            name: 'task name',
            color: '#ffc8dd',
            task: 'walk the dog',
            owner: 'martin',
        },
        {
            id: 2,
            columnId: 1,
            name: 'task name',
            color: '#ffc8dd',
            task: 'walk the dog',
            owner: 'mar',
        },
    ];

    return (
        <CardContext.Provider value={cards}>
            <Board />;
        </CardContext.Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

//  {
//         title: 'Pending',
//         id: 1,
//         cardLimit: 6,
//  },
