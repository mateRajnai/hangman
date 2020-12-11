import React, {useState, useEffect, useContext} from 'react';
import GuessedLetter from '../components/GuessedLetter';
import {VocabularyContext} from './VocabularyContext';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const {generatedWord} = useContext(VocabularyContext);

    const [guessedLetter, setGuessedLetter] = useState("");
    const [guessedLetters, setGuessedLetters] = useState("");
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    const addGuessedLetter = () => {
        let isWrongLetter;
        for (let i = 0; i < generatedWord.length; i++) {
            if (generatedWord.charAt(i) === guessedLetter) {
                correctLetters[i] = generatedWord.charAt(i);
                isWrongLetter = true;
            }
        }
        if (isWrongLetter) {
            setWrongLetters([...wrongLetters, guessedLetter]);  

        }  
    }


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
