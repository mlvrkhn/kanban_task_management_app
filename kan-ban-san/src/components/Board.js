/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
import React from 'react';
import Form from './Form';
import Column from './Column';
import columns from '../../data/columns';

export default function Board(props) {
    const { setCards } = props;

    const renderColumns = columns.map((col) => <Column key={col.id} data={col} setCards={setCards} />);

    return (
        <article className="board-container container" style={boardStyle}>
            <h1>Kan Ban San</h1>
            <Form setCards={setCards} style={{ border: '1px solid green' }} />
            <section style={{ display: 'flex' }}>{renderColumns}</section>
        </article>
    );
}

const boardStyle = {
    backgroundColor: 'mistyrose',
    width: '700px',
    height: '700px',
    border: '1px solid black',
    margin: '10px',
    padding: '20px',
};
