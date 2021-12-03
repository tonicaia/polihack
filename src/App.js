import Dashboard from './Dashboard';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from "react-bootstrap";
import Price from './components/price/Price';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" variant="dark" sticky="top" >
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="statistics">Statistics</Nav.Link>
      <Nav.Link href="pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Dashboard/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Price />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
