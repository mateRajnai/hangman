import './App.css';
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Content from './components/Content';
import {VocabularyProvider} from "./context/VocabularyContext"
import {LettersProvider} from "./context/LettersContext"
import { GameProvider } from './context/GameContext';

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
};

export default App;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #383961;
`;