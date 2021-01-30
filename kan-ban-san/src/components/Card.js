/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Card(props) {
    const {
        data: { task, name, id, owner },
    } = props;

    const renderNavigationButtons = () => {
        return (
            <>
                <Button cardId={id} direction="left" />
                <Button cardId={id} direction="right" />
            </>
        );
    };

    return (
        <div style={cardStyle} key={id}>
            <h3>{name}</h3>
            <h4>{owner}</h4>
            <p>{task}</p>
            {renderNavigationButtons()}
        </div>
    );
}

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

Card.propTypes = {
    data: PropTypes.shape({
        task: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
    }),
};
