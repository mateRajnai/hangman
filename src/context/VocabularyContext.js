import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {

    const [vocabularySidebarIsCollapsed, setVocabularySidebarIsCollapsed] = useState(true);

    const toggleVocabularies = () => {
        setVocabularySidebarIsCollapsed(!vocabularySidebarIsCollapsed);
    }


    return (
        <VocabularyContext.Provider value={{
            vocabularySidebarIsCollapsed,
            toggleVocabularies
           
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};

