import "./Tateti.css"

const Tateti = () => {
    return ( 
        <div className="main-container">
            <div className="game-title">
                <h1 className="game-name">Ta Te Ti</h1>
                <img className="game-logo" src={require("../../assets/images/tateti.jpg")}></img>
            </div>
        </div>
    );
}

export default Tateti;