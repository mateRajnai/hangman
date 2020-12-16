import React from 'react';
import { Route } from "react-router-dom";
import Game from "./Game";
import Vocabulary from "./Vocabulary";
import styled from "styled-components";


const Content = () => {

    return (
        <StyleWrapper>
            <Route
                path={"/"}
                exact
                component={Game}
            />
            <Route
                path={"/vocabulary"}
                exact
                component={Vocabulary}
            />
        </StyleWrapper>

    );
};

export default Content;


const StyleWrapper = styled.div`
    flex: 20;
    display: flex;
    background-color: #383961;
`;
