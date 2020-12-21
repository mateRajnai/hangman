import React, {useState, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';
export const GameStatusContext = React.createContext();

export const GameStatusProvider = (props) => {

    const [isNewGame, setIsNewGame] = useState(false);
    const [isEndOfGame, setIsEndOfGame] = useState(false);
    const [isPlayerWon, setIsPlayerWon] = useState(false);
    const {generateWord} = useContext(VocabularyContext);

    const startNewGame = (e) => {
        setIsEndOfGame(false);
        setIsPlayerWon(false);
        generateWord(e);
        setIsNewGame(true);
        console.log(isPlayerWon)
        console.log(isEndOfGame)
    }

    return (
        <GameStatusContext.Provider value={{
            isEndOfGame,
            setIsEndOfGame, 
            isPlayerWon, 
            setIsPlayerWon,
            startNewGame, 
            isNewGame, 
            setIsNewGame
        }}>
            {props.children}
        </GameStatusContext.Provider>
    );
};