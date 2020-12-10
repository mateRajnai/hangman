import './App.css';
import Game from "./components/Game";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import {VocabularyProvider} from "./context/VocabularyContext"

function App() {
  return (
    <StyleWrapper id="App">
      <VocabularyProvider>
        <Game/>
        <SideBar/>
      </VocabularyProvider>
    </StyleWrapper>
  );
}

export default App;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;