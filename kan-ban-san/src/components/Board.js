/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
import React from 'react';
import { v4 as uuid } from 'uuid';
import Form from './Form';
import Column from './Column';
import boardFields from '../boardFields';

export default function Board() {
    const { columns } = boardFields;

    const columnsList = columns.map((column) => {
        // const { id } = column;
        return <Column key={uuid()} column={column} />;
    });

    return (
        <article className="board-container container" style={boardStyle}>
            <h1>Kan Ban San</h1>
            <Form style={{ border: '1px solid green' }} />
            <ul style={{ display: 'flex' }}>{columnsList}</ul>
        </article>
    );
}

const boardStyle = {
    backgroundColor: 'mistyrose',
    width: '700px',
    height: '600px',
    border: '3px solid black',
    margin: '10px',
};
