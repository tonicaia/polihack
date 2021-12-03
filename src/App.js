import Dashboard from './Dashboard';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Dashboard/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
