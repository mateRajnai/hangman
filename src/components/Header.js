import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    let location = useLocation();

    return (
        <StyleWrapper id="header" className="styled-div">
            <header>
                {location.pathname === "/vocabulary" &&
                    <NavLink exact={true} to={"/"} className="link">
                        Home
                    </NavLink>
                    }
                {location.pathname === "/" &&
                    <NavLink exact={true} to={"/vocabulary"} className="link">
                        Vocabularies
                    </NavLink>
                    }            
            </header>
        </StyleWrapper>
    );
};

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