import React from 'react';
import { connect } from 'react-redux';
import { updateGameMoveList } from './redux/actions';

function Board(props) {
    return (
        <div className="centerflex">
            <table>
                <tbody>
                    <tr>
                        <td onClick={ () => props.onClickBox(0)}>{ props.currMap[0] }</td>
                        <td onClick={ () => props.onClickBox(1)}>{ props.currMap[1] }</td>
                        <td onClick={ () => props.onClickBox(2)}>{ props.currMap[2] }</td>
                    </tr>
                    <tr>
                        <td onClick={ () => props.onClickBox(3)}>{ props.currMap[3] }</td>
                        <td onClick={ () => props.onClickBox(4)}>{ props.currMap[4] }</td>
                        <td onClick={ () => props.onClickBox(5)}>{ props.currMap[5] }</td>
                    </tr>
                    <tr>
                        <td onClick={ () => props.onClickBox(6)}>{ props.currMap[6] }</td>
                        <td onClick={ () => props.onClickBox(7)}>{ props.currMap[7] }</td>
                        <td onClick={ () => props.onClickBox(8)}>{ props.currMap[8] }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currMap: state.game.currMap
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickBox: (id) => { dispatch(updateGameMoveList(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);