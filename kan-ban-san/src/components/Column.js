/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuid } from 'uuid';
import Card from './Card';

export default function Column(props) {
    const {
        column: { cards, title },
    } = props;

    const cardList = cards.map((card) => {
        return <Card cards={card} key={uuid()} />;
    });

    return (
        <div className="column-container container" style={columnStyle}>
            <h1>{title}</h1>
            <ul>{cardList}</ul>
        </div>
    );
}

const columnStyle = {
    backgroundColor: `yellow`,
    border: '1px solid red',
    height: '450px',
    width: '150px',
    margin: '0 2px',
    textAlign: 'center',
};
