import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {

    const [vocabulary, setVocabulary] = useState("english");
    const [generatedWord, setGeneratedWord] = useState("a");

    const generateWord = (event) => {
        const chosenVocabulary = event.target.getAttribute("data-vocabulary") || vocabulary;
        setVocabulary(chosenVocabulary);
        let generatedWord;
        switch (chosenVocabulary) {
            case "english":
                generatedWord = require('random-words')();
                break;
            case "german":
                generatedWord = require('random-noun-generator-german')();
                break;
            default:
                generatedWord = "apple";
                break;
        }
        setGeneratedWord(generatedWord); 
        console.log(`vocab: ${chosenVocabulary}`);
        console.log(generatedWord);           
    }

    return (
        <VocabularyContext.Provider value={{
            generateWord,
            generatedWord,
            vocabulary
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};