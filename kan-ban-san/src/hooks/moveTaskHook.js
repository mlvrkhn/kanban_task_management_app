/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
// import React from 'react';
// import cards from '../../data/cards';
import columns from '../../data/columns';
import useLocalStorage from './localStorageHook';

const useMoveTask = () => {
    const [currCards, setCurrCards] = useLocalStorage('cards');

    const moveTask = (id, action) => {
        const [cardToMove] = currCards.filter((c) => c.id === id);

        const countTheCards = (colId) => {
            let cardsInColumn = 0;
            currCards.forEach((card) => {
                if (card.columnId === colId) {
                    cardsInColumn += 1;
                }
            });
            return cardsInColumn;
        };

        function checkIfNotEdge() {
            if (action === 'MOVE_LEFT') {
                if (cardToMove.columnId - 1 >= 1) {
                    return true;
                }
            }
            if (action === 'MOVE_RIGHT') {
                if (cardToMove.columnId + 1 <= columns.length) {
                    return true;
                }
            }
            return false;
        }

        function checkIfNotFull() {
            if (action === 'MOVE_RIGHT') {
                const nextColumnLimit = columns[cardToMove.columnId].cardLimit;
                const nextColumnId = columns[cardToMove.columnId].id;
                if (countTheCards(nextColumnId) < nextColumnLimit) {
                    return true;
                }
            }
            if (action === 'MOVE_LEFT') {
                const prevColumnLimit = columns[cardToMove.columnId - 2].cardLimit;
                const prevColumnId = columns[cardToMove.columnId - 2].id;
                if (countTheCards(prevColumnId) < prevColumnLimit) {
                    return true;
                }
            }
            return false;
        }

        const notEdge = checkIfNotEdge();
        const notFull = checkIfNotFull();

        if (notFull && notEdge) {
            // update the state here
        }
    };

    return [moveTask, currCards, setCurrCards];
};
export default useMoveTask;
