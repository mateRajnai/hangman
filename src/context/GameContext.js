import React, {useEffect, useState} from 'react';

export const GameContext = React.createContext();

export const GameProvider = (props) => {

    const [isEndOfGame, setIsEndOfGame] = useState(false);
    const [isPlayerWon, setIsPlayerWon] = useState(false);

    const startNewGame = () => {
        setIsEndOfGame(false);
        setIsPlayerWon(false);
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
