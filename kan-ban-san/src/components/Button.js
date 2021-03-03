/* eslint-disable no-use-before-define */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

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
    fontSize: '14px',
    color: '#343F3E',
    border: 'none',
};
Button.propTypes = {
    direction: PropTypes.string,
    cardId: PropTypes.string,
};
Button.defaultProps = {
    direction: 'left',
    cardId: 0,
};
