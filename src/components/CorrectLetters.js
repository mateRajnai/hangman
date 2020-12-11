import React, {useContext} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';
import CorrectLetter from './CorrectLetter';
import {v4 as uuidv4} from 'uuid';

const CorrectLetters = () => {

    const {correctLetters} = useContext(LettersContext);

    return (
    <StyleWrapper id="correct-letters" className="styled-div">
        {correctLetters.map(letter => 
            <CorrectLetter key={uuidv4()} letter={letter}/> 
            )}  
    </StyleWrapper>
    )
}

export default CorrectLetters;

const StyleWrapper = styled.div`
    flex: 4;
    display: flex;
`;