/* eslint-disable no-console */
import { useContext } from 'react';
import columns from '../../data/columns';
import { CardContext, MoveTaskContext } from '../context';

const useMoveTask = () => {
    const cards = useContext(CardContext);
    const setCards = useContext(MoveTaskContext);

    const moveTask = (id, action) => {
        const [cardToMove] = cards.filter((c) => c.id === id);
        const countCardsInColumn = (colId) => {
            let cardsInColumn = 0;
            cards.forEach((card) => {
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
                try {
                    const nextColumnLimit = columns[cardToMove.columnId].cardLimit;
                    const nextColumnId = columns[cardToMove.columnId].id;
                    if (countCardsInColumn(nextColumnId) < nextColumnLimit) {
                        return true;
                    }
                } catch (error) {
                    console.log('Cannot move from edge column');
                }
            }
            if (action === 'MOVE_LEFT') {
                try {
                    const prevColumnLimit = columns[cardToMove.columnId - 2].cardLimit;
                    const prevColumnId = columns[cardToMove.columnId - 2].id;
                    if (countCardsInColumn(prevColumnId) < prevColumnLimit) {
                        return true;
                    }
                } catch (error) {
                    console.log('Cannot move from edge column');
                }
            }
            return false;
        }

        const notEdge = checkIfNotEdge();
        const notFull = checkIfNotFull();

        if (notFull && notEdge) {
            if (action === 'MOVE_RIGHT') {
                cardToMove.columnId += 1;
                setCards([...cards]); // to wdaje mi sie zbyt proste a dziala
            }
            if (action === 'MOVE_LEFT') {
                cardToMove.columnId -= 1;
                setCards([...cards]);
            }
        }
    };
    return [moveTask, cards, setCards];
};

export default useMoveTask;
