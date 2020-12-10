import React from 'react';
import styled from 'styled-components';

const GuessedLetter = () => {


    return (
        <StyleWrapper id="guessed-letter" className="styled-div">
            <form>
                <input type="text" value=""></input>
                <button type="submit">Guess letter!</button>
            </form>
        </StyleWrapper>
    )

}
export default GuessedLetter;

const StyleWrapper = styled.div`
    flex: 1;
`;
