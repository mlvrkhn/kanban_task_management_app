/* eslint-disable react/require-default-props */
/* eslint-disable consistent-return */

import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CardContext } from '../context';

export default function Column(props) {
    const {
        columnData: { title, id, cardLimit, color },
    } = props;

    function renderCards() {
        const { Consumer: CardConsumer } = CardContext;
        return (
            <CardConsumer>
                {([context]) => {
                    if (context.length !== 0) {
                        return context
                            .filter((card) => card.columnId === id)
                            .map((card) => <Card key={card.id} data={card} />);
                    }
                }}
            </CardConsumer>
        );
    }

    const columnStyle = {
        backgroundColor: color,
        width: '100%',
        minHeight: '400px',
        margin: '5px',
        marginTop: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        alignItems: 'center',
    };
    const columnTitleStyle = {
        fontSize: '30px',
        borderBottom: '4px solid black',
        alignItems: 'center',
        padding: '10px',
        lineHeight: '40px',
    };

    return (
        <div className="column-container container" style={columnStyle}>
            <h1 style={columnTitleStyle}>{title}</h1>
            <p>Limit: {cardLimit}</p>
            {renderCards()}
        </div>
    );
}

Column.propTypes = {
    columnData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        cardLimit: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        isEdgeColumn: PropTypes.bool.isRequired,
    }),
};
