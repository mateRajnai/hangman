import React, {useContext, useEffect} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {VocabularyContext} from '../context/VocabularyContext'

const SideBar = () => {

    const {vocabularySidebarIsCollapsed} = useContext(VocabularyContext);

    useEffect(() => {   
    }, [vocabularySidebarIsCollapsed])


    return (
        <ProSidebar collapsed={vocabularySidebarIsCollapsed}>
            <Menu iconShape="square">
                <MenuItem >Dashboard</MenuItem>
                <SubMenu title="Components" >
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>


    );
}

export default SideBar;