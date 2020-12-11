import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';
import WrongLetters from './WrongLetters';



const Drawing = () => {

    const {wrongLetters} = useContext(LettersContext);

    useEffect(() => {
    }, [wrongLetters])

    return <StyleWrapper id="drawing" className="styled-div"></StyleWrapper>
}

export default Drawing;

const StyleWrapper = styled.div`
    flex: 4;
`;