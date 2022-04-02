import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


export const Navbar = () => {
  return (
    <nav className="nav-heading">
    <Link to="/"><h1 className="home-heading">QuickQuiz</h1></Link>
    <div className="search-bar">
        <input type="text" className="search-input-box" placeholder=" Seach for latest"/>
    </div>  
        <button className='search-button'><i class="fa fa-search"></i></button>
    <div className="login-section">
        <Link to="#">Guidline</Link>
        <Link to="#" className="login">Login</Link>
    </div>
</nav>
  )
}
