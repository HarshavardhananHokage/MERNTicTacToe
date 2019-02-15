import * as actions from './actions';
import initialState from './initialState';

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_GAME_STATE:
            
            return state;
        case actions.UPDATE_GAME_MOVE_LIST:
            let currMap = state.game.currMap.slice();
            let history = state.game.history.slice();
            history.push(currMap.slice());
            let currPlayer = state.game.currPlayer;
            if ( currPlayer === 1) {
                currMap[action.payload] = 'X';
                currPlayer = 2;
            } else {
                currMap[action.payload] = 'O';
                currPlayer = 1;
            }
            let newState = Object.assign({}, state, { game: {
                currMap: currMap,
                currPlayer: currPlayer,
                history: history
            }});
            return newState;
        default:
            return state;
    }
}

export default rootReducer;