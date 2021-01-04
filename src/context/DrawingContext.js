import React from 'react';

export const DrawingContext = React.createContext();

export const DrawingProvider = (props) => {

    return (
        <DrawingContext.Provider value={{
            
        }}>
            {props.children}
        </DrawingContext.Provider>
    )
}