import columns from '../../data/columns';

const countCardsInColumn = (cards, columnId) => {
    let cardsInColumn = null;
    let colLimit = null;
    cards.forEach((card) => {
        if (card.columnId === columnId) {
            cardsInColumn += 1;
        }
        colLimit = columns[columnId].cardLimit;
    });
    if (cardsInColumn === colLimit) {
        columns[columnId - 1].isLimitReached = true;
    }

    return cardsInColumn;
};
export default countCardsInColumn;
