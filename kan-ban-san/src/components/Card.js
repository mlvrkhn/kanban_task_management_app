/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */

import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import columns from '../../data/columns';

export default function Card(props) {
    const {
        data: { task, name, id, owner, columnId },
    } = props;

    const leftButton = <Button cardId={id} direction="left" />;
    const rightButton = <Button cardId={id} direction="right" />;
    const renderLeftAndRightButton = () => {
        return (
            <>
                {leftButton}
                {rightButton}
            </>
        );
    };

    const renderNavigationButtons = () => {
        const lastColumnId = columns.length - 1;
        const firstColumnId = columns[0].id;

        return columnId === firstColumnId
            ? rightButton
            : columnId === lastColumnId
            ? leftButton
            : renderLeftAndRightButton();
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
    backgroundColor: `#F4989C`,
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
Card.defaultProps = {
    data: PropTypes.object.isRequired,
};
