import React, {useContext} from 'react';
import { GameContext } from '../context/GameContext';
import styled from 'styled-components';

const GameEndingFeedback = () => {

    const {isEndOfGame, isPlayerWon, startNewGame} = useContext(GameContext);

    return (
        isEndOfGame &&
        <StyleWrapper id="game-ending-alert">
                            <strong>{isPlayerWon ? 
                                "Well done! You won the game." : 
                                "Oh snap! Game over."}</strong> 
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
    height: 150px;
    width: 200px;
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