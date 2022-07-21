import React from 'react'
import DarkModeButton from './DarkModeButton';
export default function Navbar() {

  return (
  <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom mb-4">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
        </li>
        </ul>
        <DarkModeButton mode="light"></DarkModeButton>
        
    </div>
   </nav>
    
  )
}
