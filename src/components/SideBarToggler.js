import React from 'react';
import styled from 'styled-components';

const SideBarToggler = () => {

    const showVocabularies = () => {
        
    }

    return (
    <StyleWrapper id="side-bar-toggler" className="styled-div">
        <button type="button" onclick={showVocabularies}>Change vocabulary</button>
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