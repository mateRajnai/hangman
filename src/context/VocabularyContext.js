import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {

    const [generatedWord, setGeneratedWord] = useState("a");
    const [vocabulary, setVocabulary] = useState("english");

    // TODO: refactor
    const generateWord = (event) => {
        const chosenVocabulary = event.target.getAttribute("data-vocabulary") || vocabulary;
        setVocabulary(chosenVocabulary);
        console.log(`vocab: ${chosenVocabulary}`)
        if (chosenVocabulary === "english") {
            const generatedEnglishWord = require('random-words')();
            console.log(generatedEnglishWord)
            setGeneratedWord(generatedEnglishWord);            
        } else if (chosenVocabulary === "german") {
            const generatedGermanWord = require('random-noun-generator-german')();
            console.log(generatedGermanWord)
            setGeneratedWord(generatedGermanWord);
        }
    }

    return (
        <VocabularyContext.Provider value={{
            generateWord,
            generatedWord
            
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};