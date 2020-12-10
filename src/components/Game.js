import React from 'react'
import styled from "styled-components";
import Drawing from './Drawing';
import WrongLetters from './WrongLetters';
import SideBarToggler from './SideBarToggler';
import CorrectLetters from './CorrectLetters';

const Game = () => {


    return (
        <GameContainer id="game-container" className="styled-div">
            <FirstSubContainerVertically id="first-sub-container-vertically" className="styled-div">
                <SideBarToggler/>
                <WrongLetters/>
                <Drawing/>
            </FirstSubContainerVertically>
            <SecondSubContainerVertically id="second-sub-container-vertically" className="styled-div">
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
    flex-direction: column;
    
    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
    }
`;

const SecondSubContainerVertically = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
`;

