/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable default-case */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { CardContext, MoveTaskContext } from './context';
import useMoveTask from './hooks/useMoveTask';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
    const [cards, setCards] = useLocalStorage('cards');
    const [moveTask] = useMoveTask();

    useEffect(() => {
        console.log(cards);
        setCards(cards);
    }, [cards]);

    // useEffect(() => {
    //     console.log('copyCards changed so Task is moved');
    // }, [copyCards]);

    return (
        <CardContext.Provider value={[cards, setCards]}>
            <MoveTaskContext.Provider value={moveTask}>
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
