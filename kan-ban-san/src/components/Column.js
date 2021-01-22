/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
// import { v4 as uuid } from 'uuid';
import cards from '../../data/cards';
import Card from './Card';
import CardContext from '../context/context';

export default function Column(props) {
    const {
        data: { title, id },
    } = props;

    function renderCards() {
        return (
            <CardContext.Consumer>
                {(cards) => {
                    return cards.map((card) => {
                        if (card.columnId === id) {
                            console.log('filtered', card.columnId);
                            return <Card key={card.id} data={card} />;
                        }
                    });
                }}
            </CardContext.Consumer>
        );
    }

    return (
        <div className="column-container container" style={columnStyle}>
            <h1>{title}</h1>
            {renderCards()}
        </div>
    );
}

const columnStyle = {
    backgroundColor: `#f7f7e8`,
    // border: '1px solid red',
    height: '500px',
    width: '100%',
    margin: '0 2px',
    textAlign: 'center',
};
