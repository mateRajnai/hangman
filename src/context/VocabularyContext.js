import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {


    const {vocabularySidebarIsCollapsed, setVocabularySidebarIsCollapsed} = useState(true);

    const showVocabularies = () => {
        
    }


    return (
        <VocabularyContext.Provider value={{
            vocabularySidebarIsCollapsed,
            showVocabularies
           
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};

