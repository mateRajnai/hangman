import './App.css';
import Game from "./components/Game";
import Vocabulary from "./components/Vocabulary";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import {VocabularyProvider} from "./context/VocabularyContext"
import {LettersProvider} from "./context/LettersContext"
import { GameProvider } from './context/GameContext';
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <StyleWrapper id="App">
        <VocabularyProvider>
          <GameProvider>
            <LettersProvider>
              <Route
              path={"/"}
              exact
              component={Game}
              />
              <Route
              path={"/vocabulary"}
              exact
              component={Vocabulary}
              />
              <SideBar/>
            </LettersProvider>
          </GameProvider>
        </VocabularyProvider>
      </StyleWrapper>
    </BrowserRouter>
  );
}

export default App;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;