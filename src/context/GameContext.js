import React, {useEffect, useState, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';

export const GameContext = React.createContext();

export const GameProvider = (props) => {

    const [isEndOfGame, setIsEndOfGame] = useState(false);
    const [isPlayerWon, setIsPlayerWon] = useState(false);
    const {generateWord} = useContext(VocabularyContext);

    const startNewGame = (e) => {
        setIsEndOfGame(false);
        setIsPlayerWon(false);
        generateWord(e);
    }

    return (
        <GameContext.Provider value={{
            isEndOfGame,
            setIsEndOfGame, 
            isPlayerWon, 
            setIsPlayerWon,
            startNewGame
        }}>
            {props.children}
        </GameContext.Provider>
    );
};
