import { useState } from "react";

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./winningCombinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer( gameTurns ) {
  let activePlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    activePlayer = 'O';
  };

  return activePlayer
}

function checkVictory( gameBoard ) {
  for (const combo of WINNING_COMBINATIONS) {
    const square1Symbol = gameBoard[combo[0].row][combo[0].column]
    const square2Symbol = gameBoard[combo[1].row][combo[1].column]
    const square3Symbol = gameBoard[combo[2].row][combo[2].column]

    if (square1Symbol === 'X') {
      if ((square1Symbol === square2Symbol) && (square1Symbol === square3Symbol)) {
        return 'X'
      }
    }
    if (square1Symbol === 'O') {
      if ((square1Symbol === square2Symbol) && (square1Symbol === square3Symbol)) {
        return 'O'
      }
    }
  }

  return null;
}

function App() {
  const [playerNames, setPlayerNames] = useState({
    'X': "Player 1",
    'O': "Player 2"
  })
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  for (const turn of gameTurns) {
      const { square, player } = turn
      const { row, col } = square
      gameBoard[row][col] = player
  };

  function resetGameHandler() {
    setGameTurns([]);
  }

  function playerNameChangeHandler(playerSymbol, newName) {
    setPlayerNames((oldPlayerNames) => {
      let newPlayerNames = {...oldPlayerNames};
      newPlayerNames[playerSymbol] = newName;
      return newPlayerNames
    })
  }

  const victoriousPlayer = checkVictory(gameBoard);

  let victoryElement = <></>

  if (victoriousPlayer) {
    victoryElement = <GameOver winner={playerNames[victoriousPlayer]} rematchHandler={resetGameHandler}/>
  }

  const hasDraw = gameTurns.length >= 9 && !victoriousPlayer;

  if (hasDraw) {
    victoryElement = <GameOver winner={null} rematchHandler={resetGameHandler}/>
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevGameTurns => {
      const currentPlayer = deriveActivePlayer(prevGameTurns)

      const newGameTurns = [ { 
        square: {row: rowIndex, col: colIndex},
        player: currentPlayer, 
        playerName: playerNames[currentPlayer],
        turnNumber: prevGameTurns.length + 1}, 
        ...prevGameTurns
      ];

      return newGameTurns
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name={playerNames['X']} symbol={"X"} isActive={activePlayer === "X"} nameChangeHandler={playerNameChangeHandler}/>
        <Player name={playerNames['O']} symbol={"O"} isActive={activePlayer === "O"} nameChangeHandler={playerNameChangeHandler}/>
      </ol>

      {victoryElement}
      <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
    </div>
    <Log gameTurns={gameTurns}/>
  </main>
  
}

export default App;
