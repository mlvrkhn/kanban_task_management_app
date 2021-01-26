/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { useState } from 'react';
import columns from '../../data/columns';

const useLocalStorage = (key, initialValue = []) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const countCardsInColumn = (colId) => {
        let cardsInColumn = 0;
        storedValue.forEach((card) => {
            if (card.columnId === colId) {
                cardsInColumn += 1;
            }
        });
        return cardsInColumn;
    };

    const setValue = (cardsToSave) => {
        try {
            const totalCards = countCardsInColumn(1);
            if (columns[0].cardLimit >= totalCards + 1) {
                setStoredValue(cardsToSave);
                localStorage.setItem(key, JSON.stringify(cardsToSave));
            } else {
                console.log('column full');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
