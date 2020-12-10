import React from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {


  


    return (
        <VocabularyContext.Provider value={{
           
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};

