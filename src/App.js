import './App.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import DarkModeButton from './components/DarkModeButton';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Textform heading="Enter Your text below"/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
