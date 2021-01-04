import React, {useState, useContext} from 'react';
import { VocabularyContext } from '../context/VocabularyContext';
import {usePrevious} from '../hooks/usePrevious';

export const DrawingContext = React.createContext();

export const DrawingProvider = (props) => {

    const drawingParts = document.getElementsByClassName("drawing-part");
    const [indexOfDrawingParts, setIndexOfDrawingParts] = useState(0);
    const {generatedWord} = useContext(VocabularyContext);

    let previousWord = usePrevious(generatedWord);

    return (
        <DrawingContext.Provider value={{
            drawingParts, 
            indexOfDrawingParts, 
            setIndexOfDrawingParts, 
            previousWord
        }}>
            {props.children}
        </DrawingContext.Provider>
    )
}