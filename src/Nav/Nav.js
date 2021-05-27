import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav className='nav-bar'>
                <h1><Link className='nav-link-header' to={'/'}>Magical Meals</Link></h1>
                <ul className='nav-links'>
                    <li>
                        <Link to='/find-meal'>Find A Meal</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav