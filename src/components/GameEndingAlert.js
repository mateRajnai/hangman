import React, {useContext, useEffect} from 'react';
import { GameContext } from '../context/GameContext';
import styled from 'styled-components';

const GameEndingAlert = () => {


    const {isEndOfGame, isPlayerWon} = useContext(GameContext);

    useEffect(() => {
        console.log(isPlayerWon);
    }, [isPlayerWon])

    return (
        <StyleWrapper id="game-ending-alert">
            {isEndOfGame ? (
                isPlayerWon ? (
                        <div className="alert alert-success" role="alert">
                            <strong>Well done!</strong> You successfully read this
                            important alert message.
                        </div>
                    )
                    : (
                        <div className="alert alert-danger" role="alert">
                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                        </div>
                    )
                )
                : (
                <div></div>
                )
            }
        </StyleWrapper>
    );
};


export default GameEndingAlert;

const StyleWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 150px;
    width: 150px;
    z-index: 100;

    .alert {
        height: 150px;
        width: 150px;
    }
`;