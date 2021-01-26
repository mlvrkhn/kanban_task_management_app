/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
import React from 'react';
import Form from './Form';
import Column from './Column';
import columns from '../../data/columns';

export default function Board() {
    const renderColumns = columns.map((col) => <Column key={col.id} data={col} />);

    return (
        <article className="board-container container" style={boardStyle}>
            <h1 style={headerStyle}>Kan Ban App</h1>
            <h5 style={addCardStyle}>Add New Card</h5>
            <Form />
            <section style={{ display: 'flex' }}>{renderColumns}</section>
        </article>
    );
}

const headerStyle = {
    color: '#fb6376',
    fontSize: '35px',
};
const boardStyle = {
    backgroundColor: '#404e4d',
    width: '700px',
    minHeight: '500px',
    padding: '20px',
    borderRadius: '3px',
};
const addCardStyle = {
    fontSize: '20px',
    color: '#fb6376',
};
