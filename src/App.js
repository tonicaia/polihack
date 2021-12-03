import Dashboard from './Dashboard';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Dashboard/>}/>
          <Route path="/login" element={<Login />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
