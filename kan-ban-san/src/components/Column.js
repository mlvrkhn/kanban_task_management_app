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
        const { Consumer: CardConsumer } = CardContext;
        return (
            <CardConsumer>
                {(context) => {
                    return context
                        .filter((card) => card.columnId === id)
                        .map((card) => <Card key={card.id} data={card} />);
                }}
            </CardConsumer>
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
