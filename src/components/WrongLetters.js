import React, {useContext} from 'react';
import styled from 'styled-components'
import WrongLetter from './WrongLetter';
import {LettersContext} from '../context/LettersContext';
import {v4 as uuidv4} from 'uuid';

const WrongLetters = () => {

    const {wrongLetters} = useContext(LettersContext);


    return ( 
        <StyleWrapper id="wrong-letters" className="styled-div">
            {wrongLetters.map(letter => 
                <WrongLetter key={uuidv4} letter={letter}/>
                )}
        </StyleWrapper>
    )
}

export default WrongLetters;

const StyleWrapper = styled.div`
    flex: 2;
`;