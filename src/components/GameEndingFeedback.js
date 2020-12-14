import React, {useContext, useEffect} from 'react';
import { GameContext } from '../context/GameContext';
import styled from 'styled-components';

const GameEndingFeedback = () => {


    const {isEndOfGame, isPlayerWon, startNewGame} = useContext(GameContext);

    useEffect(() => {
        console.log(isPlayerWon);
    }, [isPlayerWon])

    return (
        <StyleWrapper id="game-ending-alert">
            {isEndOfGame && isPlayerWon &&
                        <div className="alert alert-success" role="alert">
                            <strong>Well done! You won the game.</strong> 
                            <button onClick={startNewGame}>Start new game</button>
                        </div>
            }
            {isEndOfGame && !isPlayerWon &&
                        <div className="alert alert-danger" role="alert">
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                            <button onClick={startNewGame}>Start new game</button>
                        </div>
            }
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

    .alert {
        height: 150px;
        width: 200px;
        color: white;
        background-color: red;
        padding: 20px 20px;
        border: 3px solid;
        border-radius: 20px;
        border-color: white;
    }
`;