import React, {useContext, useEffect} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';
import {VocabularyContext} from '../context/VocabularyContext';
import englishFlag from '../images/english_flag.png'

const SideBar = () => {

    const {vocabularySidebarIsCollapsed} = useContext(VocabularyContext);

    useEffect(() => {   
    }, [vocabularySidebarIsCollapsed])


    return (
        <ProSidebar collapsed={vocabularySidebarIsCollapsed}>
            <Menu iconShape="square">
                <h1>Vocabularies</h1>
                <MenuItem >
                    <button type="button">
                        <StyledFlag src={englishFlag} alt="English vocabulary"></StyledFlag>
                    </button>
                    </MenuItem>
                <MenuItem>Component 2</MenuItem>
            </Menu>
        </ProSidebar>


    );
}

export default SideBar;

const StyledFlag = styled.img`
    width: inherit;
    height: 80px;
    cursor: pointer;
    border: 0
`;