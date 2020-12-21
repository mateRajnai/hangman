import React from 'react';
import styled from 'styled-components';

const WrongLetter = (props) => {
    return (
        <StyleWrapper>
            {props.letter},
        </StyleWrapper>
    );
};

export default WrongLetter;

const StyleWrapper = styled.div`
    color: white;
    margin: 6px;
    font-size: 150%;
`;