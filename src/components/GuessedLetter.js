import React, {useContext} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';

const GuessedLetter = () => {


    const {guessedLetter, setGuessedLetter, addToGuessedLetters} = useContext(LettersContext);


    return (
        <StyleWrapper id="guessed-letter" className="styled-div">
                <input type="text" value={guessedLetter} onChange={e => setGuessedLetter(e.target.value)}></input>
                <button type="button" data-guessedLetter={guessedLetter} onClick={guessedLetter => {addToGuessedLetters(guessedLetter)}}>Guess letter!</button>
        </StyleWrapper>
    )

}
export default GuessedLetter;

const StyleWrapper = styled.div`
    flex: 1;

    input {
        width: 20%;
        min-width: 20%;
        height: 70%;
    }
`;
