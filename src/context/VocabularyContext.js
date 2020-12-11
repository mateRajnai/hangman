import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {

    const [vocabularySidebarIsCollapsed, setVocabularySidebarIsCollapsed] = useState(true);
    const [generatedWord, setGeneratedWord] = useState("");


    const toggleVocabularies = () => {
        setVocabularySidebarIsCollapsed(!vocabularySidebarIsCollapsed);
    }

    // TODO: refactor
    const getWordFromVocabulary = (event) => {
        const vocabulary = event.target.getAttribute("data-vocabulary");
        if (vocabulary === "english") {
            setGeneratedWord("flag")
        } else if (vocabulary === "german") {
            setGeneratedWord("flagge")
        }
    }


    return (
        <VocabularyContext.Provider value={{
            vocabularySidebarIsCollapsed,
            toggleVocabularies,
            getWordFromVocabulary,
            generatedWord
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};

