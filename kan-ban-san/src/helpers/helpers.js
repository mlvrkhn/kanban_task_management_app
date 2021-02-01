/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */

import columns from '../../data/columns';

export const isSpaceInColumn = (storageCards, colId = 0) => {
    const nrCardsInCol = storageCards.filter((c) => c.columnId === colId);
    return nrCardsInCol.length < columns[colId].cardLimit;
};

export const isNotEdgeCol = (direction, nextColumnId) => {
    if (direction === 'left') {
        return nextColumnId >= 0;
    }
    return nextColumnId <= columns.length;
};
export const targetColumnExisis = (nextColumnId) => {
    return nextColumnId >= 0 && nextColumnId < columns.length;
};
