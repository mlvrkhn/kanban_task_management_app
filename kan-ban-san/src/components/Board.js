/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
import React from 'react';
// import { v4 as uuid } from 'uuid';
import Form from './Form';
import Column from './Column';
import columns from '../../data/columns';

export default function Board() {
    const renderColumns = columns.map((col) => {
        const { id } = col;
        return <Column key={id} data={col} />;
    });

    return (
        <article className="board-container container" style={boardStyle}>
            <h1>Kan Ban San</h1>
            <Form style={{ border: '1px solid green' }} />
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
