
const turnNumberLabelText = "TURN #: "
const selectedLabel = "selected"
const rowLabelText = "ROW: "
const colLabelText = "COLUMN: "

export default function LogEntry({ gameTurn }) {
    const { square, player, turnNumber } = gameTurn;
    const { row, col } = square;

    return <li>
        <span>{`${turnNumberLabelText} ${turnNumber} - ${player} ${selectedLabel} ${rowLabelText} ${row} ${colLabelText} ${col}`}</span>
    </li>
}