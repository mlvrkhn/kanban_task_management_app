/* eslint-disable no-console */
import React from 'react';

export default function Form() {
    const doSomething = () => {
        console.log('I did something');
    };

    return (
        <form onSubmit={doSomething}>
            <button type="submit">Submit</button>
        </form>
    );
}
