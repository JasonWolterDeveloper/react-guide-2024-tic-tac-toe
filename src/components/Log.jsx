import LogEntry from "./LogEntry"

export default function Log({ gameTurns }) {


    return <ol id="log">
        {gameTurns.map((gameTurn) => <LogEntry key={gameTurn.turnNumber} gameTurn={gameTurn}/>)}
    </ol>
}