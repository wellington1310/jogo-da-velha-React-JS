import './App.css';
import Background from './components/Background';
import Container from './components/Container';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import Restart from './components/Restart';



function App() {

  return (<div>
    teste 11

    <Background />

    <GameBoard>

      <Container />
      <Restart />

    </GameBoard>

    <GameOver />

  </div >
  );
}

export default App;
