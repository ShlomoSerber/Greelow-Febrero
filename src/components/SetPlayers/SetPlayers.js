import "./SetPlayers.css"

const SetPlayers = () => {
    return (
        <div className="main-container">
            <h1 className="main-title">Set player names</h1>
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