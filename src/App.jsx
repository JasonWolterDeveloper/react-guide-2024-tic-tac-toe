import { useState } from "react";

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";

function deriveActivePlayer( gameTurns ) {
  let activePlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    activePlayer = 'O';
  };

  return activePlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevGameTurns => {
      const currentPlayer = deriveActivePlayer(prevGameTurns)

      const newGameTurns = [ { 
        square: {row: rowIndex, col: colIndex},
        player: activePlayer, 
        turnNumber: prevGameTurns.length + 1}, 
        ...prevGameTurns
      ];

      return newGameTurns
    });
  }
  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name={"Player 1"} symbol={"X"} isActive={activePlayer === "X"}/>
        <Player name={"Player 2"} symbol={"O"} isActive={activePlayer === "O"}/>
      </ol>

      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
    </div>
    <Log gameTurns={gameTurns}/>
  </main>
  
}

export default App;
