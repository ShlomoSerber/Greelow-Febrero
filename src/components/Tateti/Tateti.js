import { useState, useEffect } from "react";
import "./Tateti.css"

const Tateti = () => {
    // I separated x and o into 2 states because it was easier than having them in one state:
    const [x, setX] = useState([]);
    const [o, setO] = useState([]);
    // Used to block/unblock/clear the board:
    const [playing, setPlaying] = useState(true);
    const [player, setPlayer] = useState("X");
    // Used to draw 9 squares (easier than using multiple for loops):
    const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Winning conditions (separate but equal for x and o) inside a useEffect that watches x and o:
    useEffect(() => {
        if (x.some(n => n == 1) && x.some(n => n == 2) && x.some(n => n == 3) 
        || x.some(n => n == 4) && x.some(n => n == 5) && x.some(n => n == 6)
        || x.some(n => n == 7) && x.some(n => n == 8) && x.some(n => n == 9)
        || x.some(n => n == 1) && x.some(n => n == 4) && x.some(n => n == 7)
        || x.some(n => n == 2) && x.some(n => n == 5) && x.some(n => n == 8)
        || x.some(n => n == 3) && x.some(n => n == 6) && x.some(n => n == 9)
        || x.some(n => n == 1) && x.some(n => n == 5) && x.some(n => n == 9)
        || x.some(n => n == 3) && x.some(n => n == 5) && x.some(n => n == 7)
        ) {
            setPlaying(false);
            setPlayer("X");
        }

        if (o.some(n => n == 1) && o.some(n => n == 2) && o.some(n => n == 3) 
        || o.some(n => n == 4) && o.some(n => n == 5) && o.some(n => n == 6)
        || o.some(n => n == 7) && o.some(n => n == 8) && o.some(n => n == 9)
        || o.some(n => n == 1) && o.some(n => n == 4) && o.some(n => n == 7)
        || o.some(n => n == 2) && o.some(n => n == 5) && o.some(n => n == 8)
        || o.some(n => n == 3) && o.some(n => n == 6) && o.some(n => n == 9)
        || o.some(n => n == 1) && o.some(n => n == 5) && o.some(n => n == 9)
        || o.some(n => n == 3) && o.some(n => n == 5) && o.some(n => n == 7)
        ) {
            setPlaying(false);
            setPlayer("O");
        }

    }, [x, o]);

    // Function that activates when a square in the board is clicked:
    const squareClick = (event, squareNumber) => {
        event.target.textContent = player;
        event.target.classList.add("game-square-clicked");

        if (player == "X") {
            setX([squareNumber, ...x]);
            setPlayer("O");
        } else if (player == "O") {
            setO([squareNumber, ...o]);
            setPlayer("X");
        }
    }

    // Function to clear the board and all states, starting a new game:
    const newGame = () => {
        setX([]);
        setO([]);
        setPlaying(true);
        setPlayer("X");
        squares.forEach(square => {
            document.querySelector(`#id${square}`).textContent = "";
            document.querySelector(`#id${square}`).classList.remove("game-square-clicked");
        });
    }

    return (
        <div className="main-container">
            <div className="game-title">
                <h1 className="game-name">Ta Te Ti</h1>
                <img className="game-logo" src={require("../../assets/images/tateti.jpg")} alt=""></img>
            </div>
            <h2 className="current-player">{playing ? `It's ${player} Turn` : `${player} Wins!`}</h2>
            <button className={playing ? "hide" : "new-game"} onClick={() => newGame()}>New Game</button>
            <div className={playing ? "game-squares" : "game-squares game-squares-won"}>
                {
                squares.map(square => 
                    <div className="game-square" key={square} onClick={(event) => squareClick(event, square)} id={`id${square}`}></div>
                )
                }
            </div>
            <div className="footer">© Shlomo Serber - 2022</div>
        </div>
    );
}

export default Tateti;