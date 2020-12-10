import React, {useState, useEffect} from 'react';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const [guessedLetter, setGuessedLetter] = useState("");

    const getGuessedLetter = (e) => {
        setGuessedLetter(e.target.getAttribute("data-guessed-letter"));
    }

    useEffect(() => {
        console.log(guessedLetter)
    }, [guessedLetter])


    return (
        <LettersContext.Provider value={{
            getGuessedLetter
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
