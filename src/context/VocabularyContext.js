import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {

    const [vocabularySidebarIsCollapsed, setVocabularySidebarIsCollapsed] = useState(true);

    const toggleVocabularies = () => {
        setVocabularySidebarIsCollapsed(!vocabularySidebarIsCollapsed);
    }

    const getWordFromVocabulary = (event) => {
        event.stopPropagation();
        console.log(event);
        console.log(event.target.getAttribute("vocabulary"));

    }


    return (
        <VocabularyContext.Provider value={{
            vocabularySidebarIsCollapsed,
            toggleVocabularies,
            getWordFromVocabulary
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};

