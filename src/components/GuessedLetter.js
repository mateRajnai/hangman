import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';

const GuessedLetter = () => {

    const [letter, setLetter] = useState("");
    const {getGuessedLetter} = useContext(LettersContext);


    return (
        <StyleWrapper id="guessed-letter" className="styled-div">
                <input type="text" value={letter} onChange={e => setLetter(e.target.value)}></input>
                <button type="button" data-l={letter} onClick={e => getGuessedLetter(e)}>Guess letter!</button>
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
