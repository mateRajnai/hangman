import React, {useContext, useEffect} from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';
import {VocabularyContext} from '../context/VocabularyContext';
import englishFlag from '../images/english_flag.png';
import germanFlag from '../images/german_flag.png';

const SideBar = () => {

    const {vocabularySidebarIsCollapsed, getWordFromVocabulary} = useContext(VocabularyContext);

    useEffect(() => {   
    }, [vocabularySidebarIsCollapsed])


    return (
        <ProSidebar collapsed={vocabularySidebarIsCollapsed}>
            <Menu iconShape="square">
                <h1>Vocabularies</h1>
                <MenuItem >
                    <button type="button" className="flag-button"  onClick={getWordFromVocabulary}>
                        <StyledFlag src={englishFlag} alt="English vocabulary" data-vocabulary="english"></StyledFlag>
                    </button>
                    </MenuItem>                
                <MenuItem >
                    <button type="button" className="flag-button" onClick={getWordFromVocabulary}>
                        <StyledFlag src={germanFlag} alt="German vocabulary" data-vocabulary="german"></StyledFlag>
                    </button>
                </MenuItem>
            </Menu>
        </ProSidebar>


    );
}

export default SideBar;

const StyledFlag = styled.img`
    width: 160px;
    height: 80px;
    cursor: pointer;
    border: 0
`;
