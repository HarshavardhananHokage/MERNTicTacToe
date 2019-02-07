import React, { Component } from 'react';
import Board from './Board';

class GameManager extends Component {
    
    render() {
        return (
            <div id="gamecontainer">
                <div>
                    <h2>Player 1</h2>
                </div>
                <Board />
                <div>
                    <h2>Player 2</h2>
                </div>
            </div>
        )
    }
}

export default GameManager;