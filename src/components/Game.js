import React from 'react'
import styled from "styled-components";
import Drawing from './Drawing';
import WrongLetters from './WrongLetters';
import SideBarToggler from './SideBarToggler';
import CorrectLetters from './CorrectLetters';

const Game = () => {


    return (
        <GameContainer id="game-container">
            <FirstSubContainerVertically id="first-sub-container-vertically">
                <Drawing/>
                <WrongLetters/>
                <SideBarToggler/>
            </FirstSubContainerVertically>
            <SecondSubContainerVertically id="second-sub-container-vertically">
                <CorrectLetters/>
            </SecondSubContainerVertically>
        </GameContainer>
    );
}

export default Game;

const GameContainer = styled.div`
    flex: 10;
    display: flex;
    flex-direction: column;
`;

const FirstSubContainerVertically = styled.div`
    flex: 7;
    display: flex;
    flex-direction: row;
`;

const SecondSubContainerVertically = styled.div`
    flex: 3;
    display: flex;
    flex-direction: row;
`;

