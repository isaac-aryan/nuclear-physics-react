//React
import React from 'react'
import '../static/NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar-center">
                <a href="/index.html"><h1 className = "logo">Nuclear Physics Calculator</h1></a>
        </div>

        <div className="navbar-right">
            <a href="https://github.com/isaac-aryan/NuclearPhysicsCalculator" id="code-link">Link to Project Code</a>
        </div>
    </div>
  )
}
