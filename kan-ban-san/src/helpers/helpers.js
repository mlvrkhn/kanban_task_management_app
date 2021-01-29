// import  from 'react';
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */

import useLocalStorage from '../hooks/useLocalStorage';
import columns from '../../data/columns';

const Helpers = {
    isSpaceInColumn: (storageCards, colId = '0') => {
        const nrCardsInCol = storageCards.filter((c) => c.columnId === 1);
        return nrCardsInCol.length < columns[colId].cardLimit;
    },
};

export default Helpers;
