import { useState, useEffect } from "react";
import "./Tateti.css"

const Tateti = () => {
    const [values, setValues] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [player, setPlayer] = useState("X");
    const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        
    }, [values])

    const squareClick = (event, squareNumber) => {
        event.target.value = player;

        setValues([{
            number: squareNumber,
            value: player
        }, ...values]);

        if (player == "X") {
            setPlayer("O")
        } else if (player == "O") {
            setPlayer("X")
        }

    }

    return (
        <div className="main-container">
            <div className="game-title">
                <h1 className="game-name">Ta Te Ti</h1>
                <img className="game-logo" src={require("../../assets/images/tateti.jpg")}></img>
            </div>
            <h2 className="current-player">{`It's ${player} Turn!`}</h2>
            <div className="game-squares">
                {
                squares.map(square => 
                    <div className="game-square" key={square} onClick={() => squareClick(event, square)}></div>
                )
                }
            </div>
        </div>
    );
}

export default Tateti;