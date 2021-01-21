/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
// import { v4 as uuid } from 'uuid';
import cards from '../../data/cards';
import Card from './Card';

export default function Column(props) {
    const {
        data: { title, id },
    } = props;

    const renderCards = () => {
        return cards
            .filter((c) => c.columnId === id)
            .map((c) => {
                return <Card key={c.id} data={c} />;
            });
    };

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
