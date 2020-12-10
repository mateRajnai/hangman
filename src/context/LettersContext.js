import React,{useState} from 'react';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const [guessedLetter, setGuessedLetter] = useState("");

    const addToGuessedLetters = () => {
        console.log( guessedLetter)
    }


    return (
        <LettersContext.Provider value={{
            addToGuessedLetters,
            guessedLetter, 
            setGuessedLetter
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
