import './App.css';
import Game from "./components/Game";
import SideBar from "./components/SideBar";
import styled from "styled-components";

function App() {
  return (
    <StyleWrapper id="App">
      <Game/>
      <SideBar/>
    </StyleWrapper>
  );
}

export default App;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;