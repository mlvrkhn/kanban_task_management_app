/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */

import React from 'react';
import Card from './Card';
import { CardContext } from '../context';

export default function Column(props) {
    const {
        data: { title, id, cardLimit, color },
    } = props;

    function renderCards() {
        const { Consumer: CardConsumer } = CardContext;
        return (
            <CardConsumer>
                {(context) => {
                    if (Object.keys(context).length !== 0) {
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

    return (
        <div className="column-container container" style={columnStyle}>
            <h1 style={columnTitleStyle}>{title}</h1>
            <p>Limit: {cardLimit}</p>
            {renderCards()}
        </div>
    );
}

const columnTitleStyle = {
    fontSize: '30px',
    borderBottom: '4px solid black',
    alignItems: 'center',
};
