import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {

    const [vocabularySidebarIsCollapsed, setVocabularySidebarIsCollapsed] = useState(true);
    const [generatedWord, setGeneratedWord] = useState("a");


    const toggleVocabularies = () => {
        setVocabularySidebarIsCollapsed(!vocabularySidebarIsCollapsed);
    }

    // TODO: refactor
    const generateWord = (event) => {
        const vocabulary = event.target.getAttribute("data-vocabulary");
        if (vocabulary === "english") {
            const generatedEnglishWord = require('random-words')();
            console.log(generatedEnglishWord)
            setGeneratedWord(generatedEnglishWord);            
        } else if (vocabulary === "german") {
            const generatedGermanWord = require('random-noun-generator-german')();
            console.log(generatedGermanWord)
            setGeneratedWord(generatedGermanWord);
        }
    }


    return (
        <VocabularyContext.Provider value={{
            vocabularySidebarIsCollapsed,
            toggleVocabularies,
            generateWord,
            generatedWord
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};

