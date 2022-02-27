import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SetPlayers from "./components/SetPlayers"
import Game from "./components/Game"

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<SetPlayers />}></Route>
            <Route path="/game" element={<Game />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
