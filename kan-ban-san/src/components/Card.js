/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import { v4 as uuid } from 'uuid';

export default function Card(props) {
    const {
        cards: { title, responsible, descr },
    } = props;

    return (
        <div style={cardStyle} key={uuid()}>
            <h1>{title}</h1>
            <h2>{responsible}</h2>
            <p>{descr}</p>
        </div>
    );
}

const cardStyle = {
    width: '120px',
    height: '100px',
    backgroundColor: 'lightgreen',
};
