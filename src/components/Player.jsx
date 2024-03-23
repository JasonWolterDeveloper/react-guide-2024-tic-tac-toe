import { useState } from "react"

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    let playerNameElement = <span className="player-name">{name}</span>

    if (isEditing) {
        playerNameElement = <input type="text" required />;
    }

    return <li>
    <span className="player">
      {playerNameElement}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>Edit</button>
  </li>
}