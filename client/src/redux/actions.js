export const UPDATE_GAME_STATE = "UPDATE_GAME_STATE";

export function updateGameState(moveTile) {
    return { type: UPDATE_GAME_STATE, payload: moveTile}
}