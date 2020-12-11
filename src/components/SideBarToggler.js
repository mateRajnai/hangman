import React, {useContext} from 'react';
import styled from 'styled-components';
import {VocabularyContext} from "../context/VocabularyContext"

const SideBarToggler = () => {

    const {toggleVocabularies, vocabularySidebarIsCollapsed} = useContext(VocabularyContext);

    return (
    <StyleWrapper id="side-bar-toggler" className="styled-div">
        <button type="button" onClick={toggleVocabularies}>
            {vocabularySidebarIsCollapsed ? "Show vocabularies" : "Hide vocabularies"}
            </button>
    </StyleWrapper>
    )
}

export default SideBarToggler;

const StyleWrapper = styled.div`
    flex: 1;
    button {
        width: 25%;
        min-width: 94px;
        height: 70%;
    }
`;