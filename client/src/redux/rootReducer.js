import * as actions from './actions';
import initialState from './initialState';

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_GAME_STATE:
            
            return state;
        default:
            return state;
    }
}

export default rootReducer;