import React from 'react';

export const GameContext = React.createContext();

export const GameProvider = (props) => {

    return (
        <GameContext.Provider value={{

        }}>
            {props.children}
        </GameContext.Provider>
    );
};
