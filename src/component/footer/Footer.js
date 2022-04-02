import React from 'react'
import './footer.css'
// import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <p>Made with ❤️ by Rocky</p>
            <p>Copyright &copy; 2022 Quick-Quiz, INC. All Right Reserved.</p>
            <div className="social-link-container">

            <a href="https://www.linkedin.com/in/rocky-abb69921b/"><i class="fa fa-linkedin"></i></a>
            <a href="https://twitter.com/ImRocky7277" target="_blank"><i className="fa fa-twitter"></i></a> 
            <a href="https://github.com/Rockyraven"><i class="social-icon fa fa-github"> </i></a>

            </div>

        </footer>
    )
}
