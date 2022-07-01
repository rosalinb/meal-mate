import React from 'react'
import "../NavBar.css"
import { Routes, Route, Link } from "react-router-dom";


export default function NavBar() {
  return (
    <header>
        <nav className='nav-bar'>
            <div className='logo-container'>
                <img src="" alt="logo"/>
                <h1>Meal Mate</h1>
            </div>

            <div className='other-nav-component'>
                <Link to='/'>Home</Link>
                <Link to='/cuisine'>Cuisine</Link>
                <Link to='/calories'>Calories</Link>
                {/* <button>Find</button> */}
            </div>
        </nav>
    </header>  
)
}
