import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'


import './Nav.css'


class Nav extends Component {
    render() {
        return (
            // <nav className='navicon'>

            //     <ul className='nav-links'>
            //         <li>
            //             <Link to='/find-meal'>Find A Meal</Link>
            //         </li>
            //         <li>
            //             <Link to='/contact'>Contact Us</Link>
            //         </li>
            //     </ul>
            //     {/* <h1><Link className='nav-link-header' to={'/'}>Magical Meals</Link></h1> */}
            // </nav>
            <div className='nav-container'>
                <nav>
                    <div className="navicon">
                        <div></div>
                    </div>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/find-meal' className='nav-link'>Find A Meal</Link>
                    <Link to='/contact' className='nav-link'>Contact Us</Link>
                </nav>
                <h1 className='logo'>
                    <Link className='logo' to={'/'}>
                        <span className='magical'>Magical</span>
                        <span className='leaf'><FontAwesomeIcon icon={faLeaf} /></span>
                        <span className='meals'>MEALS</span>
                    </Link>
                </h1>
            </div>

        )
    }
}

export default Nav