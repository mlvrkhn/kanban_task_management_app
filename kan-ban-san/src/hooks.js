/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';

const useLocalStorage = (name) => {
    const init = {};

    const [val, useVal] = useState(init);

    function getItem() {
        if (localStorage.getItem(name)) {
            return localStorage.getItem(name);
        }
    }
    function setItem() {
        console.log('setting item...');
    }

    // function localStorageTest() {
    //     const test = new Date().valueOf();
    //     try {
    //         localStorage.setItem(test, test);
    //         localStorage.removeItem(test);
    //         return true;
    //     } catch (e) {
    //         return false;
    //     }
    // }
    return [getItem, setItem];
};
export default useLocalStorage;
