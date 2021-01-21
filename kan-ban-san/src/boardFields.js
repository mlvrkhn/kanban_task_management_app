const boardFields = {
    columns: [
        {
            title: 'Pending',
            id: 1,
            cardLimit: 6,
            color: '#ffc8dd',
            cards: [
                {
                    title: 'card one pending',
                    id: 1,
                    descr: 'This is a description for a new task',
                    responsible: 'Carl Johnson',
                },
                {
                    title: 'card two pending',
                    id: 2,
                    descr: 'This is a description for a new task',
                    responsible: 'C.J.',
                },
            ],
        },
        {
            title: 'In progress',
            id: 2,
            cardLimit: 4,
            color: '#ffafcc',
            cards: [
                {
                    title: 'card one progress',
                    id: 1,
                    descr: 'This is a description for a new task',
                    responsible: 'MG Johnson',
                },
                {
                    title: 'card two progress',
                    id: 2,
                    descr: 'This is a description for a new task',
                    responsible: 'Carl Johnson',
                },
            ],
        },
        {
            title: 'Testing',
            id: 3,
            cardLimit: 2,
            color: '#bde0fe',
            cards: [
                {
                    title: 'card one testin',
                    id: 1,
                    descr: 'This is a description for a new task',
                    author: 'Carl Johnson',
                },
            ],
        },
        {
            title: 'Done',
            id: 4,
            cardLimit: 6,
            color: '#a2d2ff',
            cards: [
                {
                    title: 'card one done',
                    id: 1,
                    descr: 'This is a description for a new task',
                    author: 'Carl Johnson',
                },
            ],
        },
    ],
};

export default boardFields;
