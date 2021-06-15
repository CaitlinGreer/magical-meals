import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'


class Footer extends React.Component {
    render() {
        return (
            <div >
                <footer className='footer-container'>
                    <p>Created by Caitlin Greer</p>
                    <div className='links-container'>
                        <ul className='footer-links'>
                            <li>
                                <a href='https://github.com/CaitlinGreer'>
                                    <FontAwesomeIcon icon={faGithubSquare} className='github' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/caitlingreer/'>
                                    <FontAwesomeIcon icon={faLinkedin} className='linked-in' />
                                </a>
                            </li>
                        </ul>
                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer;
