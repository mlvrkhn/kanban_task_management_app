/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { CardContext } from '../context';

export default function Column(props) {
    const {
        columnData: { title, id, cardLimit, color },
    } = props;
    const [cardList] = useContext(CardContext);

    const renderCards = () =>
        cardList.map((card) => {
            if (card.columnId === id) {
                return <Card key={card.id} data={card} />;
            }
        });

    const isColumnFull = () => {
        let occurences = 0;
        cardList.forEach((card) => {
            if (card.columnId === id) {
                occurences += 1;
            }
        });
        return occurences === cardLimit;
    };

    const columnStyle = {
        backgroundColor: color,
        width: '100%',
        minHeight: '400px',
        margin: '5px',
        marginTop: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    };
    const columnTitleStyle = {
        fontSize: '30px',
        alignItems: 'center',
        padding: '10px',
        lineHeight: '40px',
    };
    const limitInfoStyle = {
        backgroundColor: '#94B0DA',
        width: '50%',
        padding: '3px',
        borderRadius: '5px',
        marginBottom: '5px',
    };

    const limitInfo = 'Limit reached';

    return (
        <div className="column-container container" style={columnStyle}>
            <h1 style={columnTitleStyle}>{title}</h1>
            {isColumnFull() ? <div style={limitInfoStyle}>{limitInfo}</div> : <div>{`Limit: ${cardLimit}`}</div>}
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
Column.defaultProps = {
    columnData: PropTypes.object.isRequired,
};
