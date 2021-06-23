import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import mickey from './mickey-icon.png'

import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <header className='container'>
                    <h1 className='text1'>
                        <span className='magical-header'>Magical</span>
                        <span>
                            <FontAwesomeIcon icon={faLeaf} className='leaf-header' />
                        </span>
                        <span className='meals-header'>MEALS</span>
                    </h1>
                    <h2 className='text2'>Here to Help You Find The Disney World Food You Love
                    <br />
                    With The Ingredients Your Body Wants</h2>
                </header>
                
                <a href='#main-page-container' className='down-icon'>
                    <img src={mickey} alt='mickey ears' className='mickey' />
                    <FontAwesomeIcon icon={faCaretDown} className='arrow' />
                </a>
            </div>
        )
    }
}

export default Header