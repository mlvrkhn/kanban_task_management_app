/* eslint-disable no-undef */
/* eslint-disable no-console */
import { useState } from 'react';

const useLocalStorage = (key, initialValue = []) => {
    const [storedCards, setStoredCards] = useState(() => {
        if (localStorage.getItem(key)) {
            const item = localStorage.getItem(key);
            return JSON.parse(item);
        }
        return initialValue;
    });

    const setValue = (cardsToSave) => {
        setStoredCards(cardsToSave);
        localStorage.setItem(key, JSON.stringify(cardsToSave));
    };

    return [storedCards, setValue];
};

export default useLocalStorage;
