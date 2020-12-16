import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {


    return (
    <StyleWrapper id="header" className="styled-div">
        <header>
            <NavLink exact={true} to={"/"} className="link">
                Home
            </NavLink>
            <NavLink exact={true} to={"/vocabulary"} className="link">
                Vocabularies
            </NavLink>            
        </header>
    </StyleWrapper>
    )
}

export default Header;

const StyleWrapper = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid white;

    .link {
        padding: 10px;
    }

`;