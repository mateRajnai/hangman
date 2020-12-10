import React, {useContext} from 'react';
import styled from 'styled-components';
import {VocabularyContext} from "../context/VocabularyContext"

const SideBarToggler = () => {

    const {toggleVocabularies} = useContext(VocabularyContext);

    return (
    <StyleWrapper id="side-bar-toggler" className="styled-div">
        <button type="button" onClick={toggleVocabularies}>Show/hide vocabularies</button>
    </StyleWrapper>
    )
}

export default SideBarToggler;

const StyleWrapper = styled.div`
    flex: 1;

    button {
        width: 25%;
        height: 70%;
    }
`;