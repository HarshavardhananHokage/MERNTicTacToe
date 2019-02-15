const initialState = {
    game: {
        currPlayer: 1,
        currMap: Array(9).fill(null),
        history: []
    },
    player1: {
        moves: []
    },
    player2: {
        moves: []
    },
    stats: {
        totalGames: 0,
        p1wins: 0,
        p2wins: 0,
        draws: 0,
        doubletraps: {
            player1: 0,
            player2: 0
        }
    }
};

export default initialState;