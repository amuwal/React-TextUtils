import React from 'react'
import { Link } from 'react-router-dom';
import DarkModeButton from './DarkModeButton';
export default function Navbar() {
  return (
  <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom mb-4">
    <Link className="navbar-brand" to="/">TextUtils</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        </ul>
        <DarkModeButton mode="light"></DarkModeButton>
        
    </div>
   </nav>
    
  )
}
