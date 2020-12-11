import React, {useState, useEffect, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const {generatedWord} = useContext(VocabularyContext);

    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    const checkGuessedLetterWasAlreadyGuessed = (e) => {
        const guessedLetter = e.target.getAttribute("data-guessed-letter");
        console.log(guessedLetter);
        const isAlreadyGuessed = wrongLetters.includes(guessedLetter) || correctLetters.includes(guessedLetter);
        if (!isAlreadyGuessed) 
            saveGuessedLetter(guessedLetter);
    }


    const saveGuessedLetter = (guessedLetter) => {
        let isWrongLetter = true;
        isWrongLetter = updateCorrectLetters(guessedLetter, isWrongLetter);
        updateWrongLetters(guessedLetter, isWrongLetter);
    }

    const updateCorrectLetters = (guessedLetter, isWrongLetter) => {
        let correctLettersToBeUpdated = [...correctLetters];
        for (let i = 0; i < generatedWord.length; i++) {
            if (generatedWord.charAt(i) === guessedLetter) {
                correctLettersToBeUpdated[i] = generatedWord.charAt(i);
                isWrongLetter = false;
            }
        }
        setCorrectLetters(correctLettersToBeUpdated);
        return isWrongLetter;
    }

    const updateWrongLetters = (guessedLetter, isWrongLetter) => {
        if (isWrongLetter) {
            setWrongLetters([...wrongLetters, guessedLetter]);  
        }  
    }


    useEffect(() => {
        console.log(generatedWord);
        console.log(wrongLetters)
        console.log(correctLetters)
    }, [correctLetters, wrongLetters, generatedWord])


    return (
        <LettersContext.Provider value={{
            saveGuessedLetter, 
            checkGuessedLetterWasAlreadyGuessed,
            correctLetters
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
