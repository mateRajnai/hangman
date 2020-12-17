import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../context/LettersContext';
import {GameStatusContext} from '../context/GameStatusContext';
import { VocabularyContext } from '../context/VocabularyContext';

const Drawing = () => {

    const {wrongLetters, isLastlyGuessedLetterWrong, setIsLastlyGuessedLetterWrong} = useContext(LettersContext);
    const {isEndOfGame, setIsEndOfGame} = useContext(GameStatusContext);
    const {generatedWord} = useContext(VocabularyContext);
    const [indexOfDrawingParts, setIndexOfDrawingParts] = useState(0);
    const drawingParts = document.getElementsByClassName("drawing-part");
    
    useEffect(() => {
        if (!isEndOfGame && isLastlyGuessedLetterWrong) {
            drawingParts[indexOfDrawingParts].classList.add("draw");
            if (drawingParts[indexOfDrawingParts + 1] === undefined) {
                setIsEndOfGame(true);
                setIsLastlyGuessedLetterWrong(false);
            } else {
                setIndexOfDrawingParts(index => index + 1);
            }
        }
    }, [drawingParts, wrongLetters, isLastlyGuessedLetterWrong, isEndOfGame, setIsEndOfGame, setIsLastlyGuessedLetterWrong])

    
    useEffect(() => {
        for (let i = 0; i < drawingParts.length; i++) {
            drawingParts[i].classList.remove("draw");
        }
        setIndexOfDrawingParts(0);
    }, [generatedWord, drawingParts])

    return <StyleWrapper id="drawing" className="styled-div">
                <svg height="250" width="100%" id="drawing-parts">
                    <g id="gallows">
                        <line x1="10" y1="230" x2="270" y2="230" className="drawing-part"/>
                        <line x1="100" y1="230" x2="100" y2="20" className="drawing-part"/>
                        {/* <line x1="100" y1="20" x2="200" y2="20" className="drawing-part"/>
                        <line id="rope" x1="200" y1="20" x2="200" y2="60" className="drawing-part"/> */}
                    </g>
                    {/* <g id="body">
                        <circle cx="200" cy="80" r="20" stroke="white" strokeWidth="4" fill="white" className="drawing-part"/>
                        <line x1="200" y1="100" x2="200" y2="150" className="drawing-part"/>
                        <line id="armL" x1="200" y1="120" x2="170" y2="140" className="drawing-part"/>
                        <line id="armR" x1="200" y1="120" x2="230" y2="140" className="drawing-part"/>
                        <line id="legL" x1="200" y1="150" x2="180" y2="190" className="drawing-part"/>
                        <line id="legR" x1="200" y1="150" x2="220" y2="190" className="drawing-part"/>
                    </g> */}
                </svg>
    </StyleWrapper>
}

export default Drawing;

const StyleWrapper = styled.div`
    flex: 5;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    margin: 10px 0;

    svg {
        margin: 0 auto;
    }

    line {
    stroke: white;
    stroke-width: 4;
    }

    .drawing-part {
        visibility: hidden;
    }

    .draw {
        visibility: visible;
    }
`;