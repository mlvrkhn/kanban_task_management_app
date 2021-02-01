/* eslint-disable no-console */

import useLocalStorage from './useLocalStorage';
import { isSpaceInColumn, isNotEdgeCol, targetColumnExisis } from '../helpers/helpers';

const useMoveTask = () => {
    const [tasks, setTasks] = useLocalStorage('cards');
    const cards = JSON.parse(JSON.stringify(tasks));

    const moveTask = (cardID, direction) => {
        const [cardToMove] = cards.filter((c) => c.id === cardID);
        const nextColumnId = direction === 'left' ? cardToMove.columnId - 1 : cardToMove.columnId + 1;

        if (targetColumnExisis(nextColumnId)) {
            if (isSpaceInColumn(cards, nextColumnId)) {
                if (isNotEdgeCol(direction, nextColumnId)) {
                    const rootCards = cards.filter((card) => card.id !== cardToMove.id);
                    cardToMove.columnId = nextColumnId;
                    setTasks([...rootCards, cardToMove]);
                }
            } else {
                console.log('LIMIT');
            }
        } else {
            console.log('You are moving off the edge!');
        }
    };
    return [moveTask, tasks, setTasks];
};

export default useMoveTask;
