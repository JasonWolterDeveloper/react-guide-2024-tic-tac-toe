
const turnNumberLabelText = "TURN #: "
const selectedLabel = "selected"
const rowLabelText = "ROW: "
const colLabelText = "COLUMN: "

export default function LogEntry({ gameTurn }) {
    const { square, playerName, turnNumber } = gameTurn;
    const { row, col } = square;

    return <li>
        <span>{`${turnNumberLabelText} ${turnNumber} - ${playerName} ${selectedLabel} ${rowLabelText} ${row} ${colLabelText} ${col}`}</span>
    </li>
}