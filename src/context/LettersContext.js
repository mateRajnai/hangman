import React,{useState} from 'react';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const [guessedLetter, setGuessedLetter] = useState("");

    const addToGuessedLetters = (event) => {
        console.log( event.target.getAttribute("data-guessedLetter"))
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
