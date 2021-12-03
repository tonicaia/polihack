import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
