import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

export default function App() {
    return <Board />;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
