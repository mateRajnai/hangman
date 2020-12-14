import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';
import WrongLetters from './WrongLetters';



const Drawing = () => {

    const {wrongLetters} = useContext(LettersContext);

    useEffect(() => {
    }, [wrongLetters])

    return <StyleWrapper id="drawing" className="styled-div">
                <svg height="250" width="100%">
                    <g id="gallows">
                        <line x1="10" y1="230" x2="270" y2="230" className="draw"/>
                        <line x1="100" y1="230" x2="100" y2="20" className="draw"/>
                        <line x1="100" y1="20" x2="200" y2="20" className="draw"/>
                        <line id="rope" x1="200" y1="20" x2="200" y2="60" className="draw"/>
                    </g>
                    <g id="body">
                        <circle cx="200" cy="80" r="20" stroke="white" strokeWidth="4" fill="white" className="draw"/>
                        <line x1="200" y1="100" x2="200" y2="150" className="draw"/>
                        <line id="armL" x1="200" y1="120" x2="170" y2="140" className="draw"/>
                        <line id="armR" x1="200" y1="120" x2="230" y2="140" className="draw"/>
                        <line id="legL" x1="200" y1="150" x2="180" y2="190" className="draw"/>
                        <line id="legR" x1="200" y1="150" x2="220" y2="190" className="draw"/>
                    </g>
                </svg>
    </StyleWrapper>
}

export default Drawing;

const StyleWrapper = styled.div`
    flex: 5;

    svg {
        margin: 0 auto;
        border: 1px solid white;
    }

    line {
    stroke: white;
    stroke-width: 4;
    }

`;