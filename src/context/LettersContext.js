import React,{useState} from 'react';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const [guessedLetter, setGuessedLetter] = useState("");

    const guessLetter = (event) => {
        console.log( event.target.getAttribute("data-guessedLetter"))
    }


    return (
        <LettersContext.Provider value={{
            guessLetter,
            guessedLetter, 
            setGuessedLetter
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
