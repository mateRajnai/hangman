import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {


    return (
    <StyleWrapper id="header" className="styled-div">
        <header>
            <Link exact={true} to={"/vocabulary"}>
                Vocabularies
            </Link>
        </header>
    </StyleWrapper>
    )
}

export default Header;

const StyleWrapper = styled.div`
    flex: 1;
`;