import React, {useState, useEffect, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const {generatedWord} = useContext(VocabularyContext);

    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    const saveGuessedLetter = (e) => {
        const guessedLetter = e.target.getAttribute("data-guessed-letter");
        let isWrongLetter = true;
        console.log(guessedLetter);
        
        let correctLettersToBeUpdated = [...correctLetters];
        for (let i = 0; i < generatedWord.length; i++) {
            if (generatedWord.charAt(i) === guessedLetter) {
                correctLettersToBeUpdated[i] = generatedWord.charAt(i);
                isWrongLetter = false;
            }
        }
        setCorrectLetters(correctLettersToBeUpdated);
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
            saveGuessedLetter
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
