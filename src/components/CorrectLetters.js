import React, {useContext} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';

const CorrectLetters = () => {

    const {correctLetters} = useContext(LettersContext);

    return (
    <StyleWrapper id="correct-letters" className="styled-div">

    </StyleWrapper>
    )
}

export default CorrectLetters;

const StyleWrapper = styled.div`
    flex: 4;
`;