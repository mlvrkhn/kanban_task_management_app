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
        margin: '4px',
    };

    return (
        <div style={cardStyle} key={id}>
            <h3>{name}</h3>
            <h4>{owner}</h4>
            <p>{task}</p>
        </div>
    );
}
