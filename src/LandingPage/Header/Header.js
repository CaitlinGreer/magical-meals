import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <header className='container'>
                    <h1 className='text1'>
                        <span className='magical-header'>Magical</span> 
                        <span className='magical-header2'>
                            <FontAwesomeIcon icon={faLeaf} className='leaf-header' />
                        <span className='meals-header'>MEALS</span>
                        </span></h1>
                    <h2 className='text2'>Here to Help You Find The Disney World Food You Love 
                    <br />
                    With The Ingredients Your Body Wants</h2>
                </header>
                <a href='#main-page-container' className='arrow-icon'>
                    <FontAwesomeIcon icon={faChevronDown}  />
                </a>
            </div>
        )
    }
}

export default Header