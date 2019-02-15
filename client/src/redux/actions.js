export const UPDATE_GAME_STATE = "UPDATE_GAME_STATE";
export const UPDATE_GAME_MOVE_LIST = "UPDATE_GAME_MOVE_LIST";

export function updateGameState(moveTile) {
    return { type: UPDATE_GAME_STATE, payload: moveTile}
}

export function updateGameMoveList(id) {
    return { type: UPDATE_GAME_MOVE_LIST, payload: id}
}