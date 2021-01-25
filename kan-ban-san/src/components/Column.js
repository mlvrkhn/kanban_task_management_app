/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card';
import { CardContext } from '../context';

export default function Column(props) {
    const {
        data: { title, id },
        setCards,
    } = props;

    function renderCards() {
        const { Consumer: CardConsumer } = CardContext;
        return (
            <CardConsumer>
                {(context) => {
                    if (Object.keys(context).length !== 0) {
                        return context
                            .filter((card) => card.columnId === id)
                            .map((card) => <Card setCards={setCards} key={card.id} data={card} />);
                    }
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
    height: '500px',
    width: '100%',
    margin: '0 2px',
    textAlign: 'center',
};
