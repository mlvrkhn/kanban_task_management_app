/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */
import React, { useContext } from 'react';
// import PropTypes, { useContext } from 'prop-types';
import useMoveTask from '../hooks/useMoveTask';
import { MoveTaskContext } from '../context';

export default function Card(props) {
    const {
        data: { task, name, id, owner },
    } = props;

    // const [moveTask] = useMoveTask();

    const moveTask = useContext(MoveTaskContext);
    // console.log('🚀 ~ Card ~ moveTask', moveTask);

    const cardStyle = {
        width: '120px',
        height: '120px',
        backgroundColor: `#fb6376`,
        display: 'inline-block',
        padding: '3px',
        margin: '4px',
        lineHeight: '0.4',
        borderRadius: '3px',
        fontSize: '12px',
    };
    const btnStyle = {
        margin: '0 2px',
        borderRadius: '3px',
        backgroundColor: '#404e4d',
        fontSize: '12px',
        border: 'none',
    };
    return (
        <div style={cardStyle} key={id}>
            <h3>{name}</h3>
            <h4>{owner}</h4>
            <p>{task}</p>
            <button style={btnStyle} type="button" onClick={() => moveTask(id, 'MOVE_LEFT')}>
                👈
            </button>
            <button style={btnStyle} type="button" onClick={() => moveTask(id, 'MOVE_RIGHT')}>
                👉
            </button>
        </div>
    );
}
// Card.propTypes = {
//     data: PropTypes.shape({
//         task: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         id: PropTypes.string.isRequired,
//         owner: PropTypes.string.isRequired,
//     }),
// };
