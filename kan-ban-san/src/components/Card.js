/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import useMoveTask from '../hooks/useMoveTask';

export default function Card(props) {
    const {
        data: { task, name, id, owner },
    } = props;

    const [moveTask] = useMoveTask({});

    const cardStyle = {
        width: '120px',
        height: '120px',
        backgroundColor: `#fb6376`,
        display: 'inline-block',
        padding: '3px',
        margin: '4px',
        lineHeight: '0.4',
        borderRadius: '3px',
    };
    return (
        <div style={cardStyle} key={id}>
            <h3>{name}</h3>
            <h4>{owner}</h4>
            <p>{task}</p>
            <button type="button" onClick={() => moveTask(id, 'MOVE_LEFT')}>
                left
            </button>
            <button type="button" onClick={() => moveTask(id, 'MOVE_RIGHT')}>
                right
            </button>
        </div>
    );
}
