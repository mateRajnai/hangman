import React, {useContext} from 'react';
import {VocabularyContext} from '../context/VocabularyContext';
import englishFlag from '../images/english_flag.png';
import germanFlag from '../images/german_flag.png';
import styled from 'styled-components';


const Vocabulary = () => {

    const {generateWord} = useContext(VocabularyContext);

    return (
        <div>
            <button type="button" className="flag-button"  onClick={generateWord}>
                <StyledFlag src={englishFlag} alt="English vocabulary" data-vocabulary="english"></StyledFlag>
            </button>
            <button type="button" className="flag-button" onClick={generateWord}>
                <StyledFlag src={germanFlag} alt="German vocabulary" data-vocabulary="german"></StyledFlag>
            </button>
        </div>
    );
};

export default Vocabulary;


const StyledFlag = styled.img`
    width: 160px;
    height: 80px;
    cursor: pointer;
    border: 0
`;
