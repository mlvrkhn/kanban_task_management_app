/* eslint-disable no-undef */
/* eslint-disable no-console */
import { useState } from 'react';

const useLocalStorage = (key, initialValue = []) => {
    const [storedCards, setStoredCards] = useState(() => {
        // turn into if else statement later
        if (localStorage.getItem(key)) {
            const item = localStorage.getItem(key);
            return JSON.parse(item);
        }
        console.log('didnt find the key');
        return initialValue;
    });

    const setValue = (cardsToSave) => {
        console.log('🚀 ~ setValue ~ cardsToSave', cardsToSave);
        setStoredCards(cardsToSave);
        localStorage.setItem(key, JSON.stringify(cardsToSave));
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
