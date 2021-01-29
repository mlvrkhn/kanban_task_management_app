/* eslint-disable no-console */
import columns from '../../data/columns';

export const totalCardsInColumn = (cards, columnId) => {
    let total = 0;
    cards.forEach((card) => {
        if (card.columnId === columnId) {
            total += 1;
        }
    });
    return total;
};

export const checkIfNotEdge = (columnId, action) => {
    if (action === 'MOVE_LEFT') {
        if (columnId - 1 >= 1) {
            return true;
        }
    }
    if (action === 'MOVE_RIGHT') {
        if (columnId + 1 <= columns.length) {
            return true;
        }
    }
    return false;
};

export const isFreeSpaceInNextColumn = (columnId = 1, action, cardList) => {
    if (action === 'MOVE_RIGHT' && columnId < 4) {
        const nextColumnId = columnId + 1;
        const nextColumnLimit = columns[nextColumnId - 1].cardLimit;
        const nrCardsInTargetColumn = totalCardsInColumn(cardList, nextColumnId);
        try {
            if (nrCardsInTargetColumn < nextColumnLimit) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }
    } else if (action === 'MOVE_LEFT' && columnId > 1) {
        const prevColumnId = columnId - 1;
        const prevColumnLimit = columns[prevColumnId - 1].cardLimit;
        const nrCardsInTargetColumn = totalCardsInColumn(cardList, prevColumnId);
        try {
            if (nrCardsInTargetColumn < prevColumnLimit) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('Cannot move from edge column');
    }
    return false;
};
