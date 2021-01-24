/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */

import React, { useState } from 'react';

function useLocalStorage(key, initialValue = '') {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (cardToSave) => {
        console.log('cardToSave', cardToSave);
        try {
            const valueToStore = cardToSave;
            setStoredValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log('Value not saved!');
        }
    };

    return [storedValue, setValue];
}

export default useLocalStorage;
