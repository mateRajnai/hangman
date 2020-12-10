import React, {useState} from 'react';

export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {


    const [vocabularySidebarIsCollapsed, setVocabularySidebarIsCollapsed] = useState(true);

    // rename: toggle
    const showVocabularies = () => {
        setVocabularySidebarIsCollapsed((!vocabularySidebarIsCollapsed));
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

