/* eslint-disable no-undef */
/* eslint-disable no-console */

import { useState } from 'react';
import columns from '../../data/columns';
import countCardsInColumn from '../helpers/countCardsInColumn';

const useLocalStorage = (key, initialValue = []) => {
    const [storedCards, setStoredCards] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (cardsToSave) => {
        try {
            const totalCards = countCardsInColumn(storedCards, 1);
            if (columns[0].cardLimit >= totalCards + 1) {
                setStoredCards(cardsToSave);
                localStorage.setItem(key, JSON.stringify(cardsToSave));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return [storedCards, setValue];
};

export default useLocalStorage;
