/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useContext } from 'react';
import { MoveTaskContext } from '../context';

export default function Button(props) {
    const { direction, cardId } = props;
    const moveTask = useContext(MoveTaskContext);
    return (
        <button style={btnStyle} type="button" onClick={() => moveTask(cardId, direction)}>
            {direction === 'left' ? '👈' : '👉'}
        </button>
    );
}
const btnStyle = {
    margin: '0 2px',
    borderRadius: '3px',
    backgroundColor: '#404e4d',
    fontSize: '12px',
    border: 'none',
};
