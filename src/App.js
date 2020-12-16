import './App.css';
import Header from "./components/Header";
import styled from "styled-components";
import {VocabularyProvider} from "./context/VocabularyContext"
import {LettersProvider} from "./context/LettersContext"
import { GameProvider } from './context/GameContext';
import { BrowserRouter } from "react-router-dom";
import Content from './components/Content';


function App() {
  return (
      <StyleWrapper id="App">
        <BrowserRouter>
            <VocabularyProvider>
              <GameProvider>
                <LettersProvider>
                  <Header/>
                  <Content/>
                </LettersProvider>
              </GameProvider>
            </VocabularyProvider>
        </BrowserRouter>
      </StyleWrapper>
  );
}

export default App;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #383961;
`;
