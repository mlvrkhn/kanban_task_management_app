/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */

import columns from '../../data/columns';

const Helpers = {
    isSpaceInColumn: (storageCards, colId = 0) => {
        const nrCardsInCol = storageCards.filter((c) => c.columnId === colId);
        return nrCardsInCol.length < columns[colId].cardLimit;
    },

    isNotEdgeCol: (direction, nextColumnId) => {
        if (direction === 'left') {
            return nextColumnId >= 0;
        }
        return nextColumnId <= columns.length;
    },
    targetColumnExisis: (nextColumnId) => {
        return nextColumnId >= 0 && nextColumnId < columns.length;
    },
};

export default Helpers;
