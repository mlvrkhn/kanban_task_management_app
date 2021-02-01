/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { CardContext, MoveTaskContext } from './context';
import useMoveTask from './hooks/useMoveTask';

export default function App() {
    const [moveTask, cards, setCards] = useMoveTask();
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
