import React from 'react';
import styled from "styled-components";

const SideBar = () => {

    return (
        <StyleWrapper id="side-bar">
            Sidebar
        </StyleWrapper>
    );
}

export default SideBar;

const StyleWrapper = styled.div`
    flex: 3;
`;