import { useState } from "react"

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName] = useState(name);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    };

    const handlePlayerNameChange = (event) => {
        setPlayerName(event.target.value);
    };


    let playerNameElement = <span className="player-name">{playerName}</span>


    if (isEditing) {
        playerNameElement = <input onChange={handlePlayerNameChange} type="text" required value={playerName} />;
    };

    return <li>
    <span className="player">
      {playerNameElement}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
}