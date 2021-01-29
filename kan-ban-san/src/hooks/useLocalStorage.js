/* eslint-disable no-undef */
/* eslint-disable no-console */

import { useState } from 'react';
import columns from '../../data/columns';
import { totalCardsInColumn } from '../helpers/handleCardHelper';

const useLocalStorage = (key, initialValue = []) => {
    const [storedCards, setStoredCards] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            // return initialValue;
        }
    });

    const setValue = (cardsToSave) => {
        try {
            const totalCards = totalCardsInColumn(storedCards, 1);
            if (totalCards < columns[0].cardLimit) {
                setStoredCards(cardsToSave);
                localStorage.setItem(key, JSON.stringify(cardsToSave));
            } else {
                console.log('column full');
            }
        } catch (error) {
            console.log('card limit reached!');
            console.error(error);
        }
    };

    return [storedCards, setValue];
};

export default useLocalStorage;

// const StateUpdateHelper = {
//     updateStates: (updatedTasks, setDistribution) => {
//         setDistribution(updatedTasks);
//     },
//     updateTasksInColumn: (newTask, targetColumnId, tasksDistribution) => {
//         return {
//             ...tasksDistribution,
//             [targetColumnId]: [...tasksDistribution[targetColumnId], newTask],
//         };
//     },
// };
