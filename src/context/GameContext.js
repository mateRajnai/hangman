import React, {useState} from 'react';

export const GameContext = React.createContext();

export const GameProvider = (props) => {

    const [isEndOfGame, setIsEndOfGame] = useState(false);

    return (
        <GameContext.Provider value={{
            isEndOfGame,
            setIsEndOfGame
        }}>
            {props.children}
        </GameContext.Provider>
    );
};
