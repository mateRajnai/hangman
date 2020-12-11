import React, {useState, useEffect, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const {generatedWord} = useContext(VocabularyContext);

    const [guessedLetter, setGuessedLetter] = useState("");
    const [correctLetters, setCorrectLetters] = useState([]);


    useEffect(() => {
        console.log(guessedLetter)
    }, [guessedLetter])


    return (
        <LettersContext.Provider value={{
            setGuessedLetter
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
