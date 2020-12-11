import React from 'react';
import styled from 'styled-components';

const CorrectLetter = (props) => {


    return (
    <StyleWrapper>{props.letter}</StyleWrapper>
    );
};

export default CorrectLetter;


const StyleWrapper = styled.div`
    height: 15%;
    width: 1%;
    margin: 8px;
    color: white;   
    border-bottom: 5px solid white;
`;