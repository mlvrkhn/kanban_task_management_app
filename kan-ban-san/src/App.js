/* eslint-disable indent */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { CardContext, MoveTaskContext } from './context';
import useLocalStorage from './hooks/localStorageHook';
// import useMoveTask from './hooks/moveTaskHook';

export default function App() {
    const [storage, setStorage] = useLocalStorage('cards');
    const [cards, setCards] = useState(storage);
    // const [moveTask] = useMoveTask(cards);

    useEffect(() => {
        setStorage(cards);
    }, [cards]);

    return (
        <CardContext.Provider value={cards}>
            {/* <MoveTaskContext.Provider value={moveTask}> */}
            <Board setCards={setCards} />
            {/* </MoveTaskContext.Provider> */}
        </CardContext.Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
