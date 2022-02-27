import "./SetPlayers.css"

const SetPlayers = () => {
    return (
        <div className="main-container">
            <div className="game-title">
                <img src={require("../assets/images/tateti.jpg")} alt="" className="game-logo"></img>
                <h1 className="game-name">Ta Te Ti</h1>
            </div>
            <h2 className="main-title">Set player names</h2>
            <form className="players-form">
                <div className="players">
                    <div className="player">
                        <span className="game-symbol">O</span>
                        <label className="text">Player 1</label>
                        <input className="input" placeholder="Name"></input>
                    </div>
                    <div className="player">
                        <span className="game-symbol">X</span>
                        <label className="text">Player 2</label>
                        <input className="input" placeholder="Name"></input>
                    </div>
                </div> 
                <button className="button">Start Game</button>
            </form>
        </div>
    );
}

export default SetPlayers;