import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {


    const {vocabularySidebarIsCollapsed, setVocabularySidebarIsCollapsed} = useState(true);


    return (
        <VocabularyContext.Provider value={{
            vocabularySidebarIsCollapsed
           
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};

