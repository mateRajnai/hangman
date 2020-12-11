import React, {useState, useEffect} from 'react';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const [guessedLetter, setGuessedLetter] = useState("");


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
