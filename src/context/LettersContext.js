import React from 'react';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const addToGuessedLetters = (e) => {
        console.log( e.target.getAttribute("data-l"));
    }


    return (
        <LettersContext.Provider value={{
            addToGuessedLetters
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
