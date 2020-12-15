import React, {useState, useEffect, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const {generatedWord} = useContext(VocabularyContext);

    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [isLastlyGuessedLetterWrong, setIsLastlyGuessedLetterWrong] = useState();

    const checkGuessedLetterWasAlreadyGuessed = (e) => {
        const guessedLetter = e.target.getAttribute("data-guessed-letter");
        console.log(guessedLetter);
        const isAlreadyGuessed = wrongLetters.includes(guessedLetter) || correctLetters.includes(guessedLetter);
        if (!isAlreadyGuessed) 
            saveGuessedLetter(guessedLetter);
    }


    const saveGuessedLetter = (guessedLetter) => {
        let guessedLetterIsWrong = true;
        let correctLettersToBeUpdated = [...correctLetters];
        for (let i = 0; i < generatedWord.length; i++) {
            if (generatedWord.charAt(i) === guessedLetter) {
                correctLettersToBeUpdated[i] = generatedWord.charAt(i);
                guessedLetterIsWrong = false;
            }
        }
        if (guessedLetterIsWrong) {
            setWrongLetters([...wrongLetters, guessedLetter]);
            setIsLastlyGuessedLetterWrong(true);  
        } else {
            setCorrectLetters(correctLettersToBeUpdated);
            setIsLastlyGuessedLetterWrong(false);
        }
    }

    useEffect(() => {
        let correctLettersInitialization = [];
        for (let i = 0; i < generatedWord.length; i++) {
            correctLettersInitialization[i] = null;
        }
        console.log("LETTERS CONTEXT")
        console.log(correctLetters)
        setCorrectLetters(correctLettersInitialization)
        console.log("----------")
        
    }, [generatedWord])


    useEffect(() => {
        console.log(generatedWord);
        console.log(wrongLetters)
        console.log(correctLetters)
    }, [correctLetters, wrongLetters, generatedWord])


    return (
        <LettersContext.Provider value={{
            checkGuessedLetterWasAlreadyGuessed,
            correctLetters,
            wrongLetters,
            isLastlyGuessedLetterWrong
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
