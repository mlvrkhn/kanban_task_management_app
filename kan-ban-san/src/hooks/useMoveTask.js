/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { useContext } from 'react';
import { checkIfNotEdge, isFreeSpaceInNextColumn } from '../helpers/handleCardHelper';
import { CardContext, MoveTaskContext } from '../context';
import useLocalStorage from './useLocalStorage';

const useMoveTask = () => {
    // const [cards, setCar] = useLocalStorage('cards');
    // const cardsCopy = JSON.parse(JSON.stringify(getter));
    const [cards, setCards] = useContext(CardContext);

    const moveTask = (id, action) => {
        const [cardToMove] = cards.filter((c) => c.id === id);

        const { columnId } = cardToMove;
        const notEdge = checkIfNotEdge(columnId, action);
        const notFull = isFreeSpaceInNextColumn(columnId, action, cards);

        console.log('🚀 ~ moveTask ~ notEdge', notEdge);
        console.log('🚀 ~ moveTask ~ notFull', notFull);

        // w ponizszym warunku - jak powinenem aktualizować ten stan?
        // poprzez metodę którą otrzymuję z Context?
        // czy moze mam stworzyc nowy useState i na nim operować a potem go zwrócić?
        if (notFull && notEdge) {
            if (action === 'MOVE_RIGHT') {
                cardToMove.columnId += 1;
                console.log('move right');
                setCards([...cards]);
            }
            if (action === 'MOVE_LEFT') {
                cardToMove.columnId -= 1;
                setCards([...cards]);
            }
        }
    };
    return [cards, moveTask];
};

export default useMoveTask;
