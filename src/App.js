import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Price from './components/price/Price';
import Calculator from './components/calculator/Calculator';
import Landing from './components/landing/Landing';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from "react-bootstrap";

import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCr7AIVDHhdi5fzKQqKt_kYz7-lWp5JvFk",
  authDomain: "wastecan-55bcc.firebaseapp.com",
  projectId: "wastecan-55bcc",
  storageBucket: "wastecan-55bcc.appspot.com",
  messagingSenderId: "1055838897299",
  appId: "1:1055838897299:web:344fdbb26b11915550b966"
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" variant="dark" sticky="top" >
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <div className="d-flex nav-main-sections">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="calculator">Calculator</Nav.Link>
        <Nav.Link href="statistics">Statistics</Nav.Link>
        <Nav.Link href="pricing">Pricing</Nav.Link>
      </div>
      <div className="nav-login">
        <Nav.Link href="login">Log in</Nav.Link>
      </div>
    </Nav>
    </Container>
  </Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/statistics" element={<Dashboard/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
