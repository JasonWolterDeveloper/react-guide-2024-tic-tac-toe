export default function GameOver({ winner, rematchHandler }) {
    let gameOverMessage = <p>There was a Draw</p>

    if (winner !== null) {
        gameOverMessage = <p>{winner} has won!</p>
    }

    return <div id="game-over">
        <h2>Game Over</h2>
        {gameOverMessage}
        <button onClick={rematchHandler}>Rematch!</button>
    </div>
}