import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';

const GuessedLetter = () => {

    const [letter, setLetter] = useState("");
    const {checkGuessedLetterWasAlreadyGuessed} = useContext(LettersContext);


    return (
        <StyleWrapper id="guessed-letter" className="styled-div">
                <input  type="text" 
                        value={letter} 
                        onChange={e => setLetter(e.target.value)}></input>
                <button type="button" 
                        data-guessed-letter={letter} 
                        onClick={e => {
                                checkGuessedLetterWasAlreadyGuessed(e); 
                                setLetter("");
                                }} 
                        disabled={letter.length !== 1}>Guess letter!</button>
        </StyleWrapper>
    )

}
export default GuessedLetter;

const StyleWrapper = styled.div`
    flex: 1;
    position: relative;

    input {
        width: 50px;
        height: 24px;
        position: absolute;
        color: #383961;
    }

    button {
        margin: 0 50px;
        width: 80px;
        height: 24px;
        position: absolute;
        color: #383961;
    }
`;
