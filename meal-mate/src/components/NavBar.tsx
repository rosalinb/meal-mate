import React from 'react'
import "../NavBar.css"

export default function NavBar() {
  return (
    <header>
        <nav>
            <div className='logo-container'>
                <img src="" alt="logo"/>
                <h1>Meal Mate</h1>
            </div>

            <div className='other-nav-component'>
                <button>Find</button>
            </div>
        </nav>
    </header>  
)
}
