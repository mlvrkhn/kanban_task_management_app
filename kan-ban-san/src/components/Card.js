/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';

export default function Card(props) {
    const {
        data: { task, name, id, color, owner },
    } = props;

    const cardStyle = {
        width: '120px',
        height: '120px',
        backgroundColor: `${color}`,
        display: 'inline-block',
        padding: '3px',
    };

    return (
        <div style={cardStyle} key={id}>
            <h1>{name}</h1>
            <h2>{owner}</h2>
            <p>{task}</p>
        </div>
    );
}
