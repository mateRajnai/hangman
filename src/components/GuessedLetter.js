import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';

const GuessedLetter = () => {


    const {guessedLetter, setGuessedLetter, guessLetter} = useContext(LettersContext);


    return (
        <StyleWrapper id="guessed-letter" className="styled-div">
                <input type="text" value={guessedLetter} onChange={e => setGuessedLetter(e.target.value)}></input>
                <button type="button" data-guessedLetter={guessedLetter} onClick={guessedLetter => {guessLetter(guessedLetter)}}>Guess letter!</button>
        </StyleWrapper>
    )

}
export default GuessedLetter;

const StyleWrapper = styled.div`
    flex: 1;
`;
