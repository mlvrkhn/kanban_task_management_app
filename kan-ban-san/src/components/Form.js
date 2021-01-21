/* eslint-disable no-console */
import React from 'react';

export default function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('I did something');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="task-owner" value="" placeholder="Owner" />
            <input type="text" name="task-name" value="" placeholder="Task name" />
            <input type="text" name="task-description" value="" placeholder="Description" />
            <button type="submit">Submit</button>
        </form>
    );
}
