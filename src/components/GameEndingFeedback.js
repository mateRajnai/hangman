import React, {useContext} from 'react';
import { GameStatusContext } from '../context/GameStatusContext';
import styled from 'styled-components';

const GameEndingFeedback = () => {

    const {isEndOfGame, isPlayerWon, startNewGame} = useContext(GameStatusContext);

    return (
        isEndOfGame &&
        <StyleWrapper id="game-ending-alert">
                            <strong>{isPlayerWon ? 
                                "Well done! You won the game." : 
                                "Oh snap! Game over."}</strong>
                                <br></br>
                            <button onClick={e => startNewGame(e)} className="new-game-button">
                                Start new game
                            </button>
        </StyleWrapper>
    );
};

export default GameEndingFeedback;

const StyleWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    height: 20%;
    width: 50%;
    background-color: #503047;
    padding: 20px 20px;
    border: 3px solid;
    border-radius: 20px;
    border-color: white;

    .new-game-button {
        margin-top: 5px;
        background-color: #383961;
    }
`;