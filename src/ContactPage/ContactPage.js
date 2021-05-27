import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ContactPage.css'

class ContactPage extends Component {
  
    render() {
        console.log('Contact!')
        return(
            <div className="contact-container">
                <h1 className='page-heading'>Contact Us</h1>
                <div className='contact-subinfo'>
                    <p>The menus at Walt Disney World are always changing.  So we may not always be up to date.                
                    But that's where you come in...
                    <br />
                    If you know of a meal we missed and want to share the magic, let us know about it!
                    <br />
                    Click on the button below, and fill out the form with as much information as you can and we'll work on
                    adding it to our options!     
                </p>
                </div>
                <div className='contact-form-link'>
                    <Link to={'/contact-form'}>Share A Meal</Link>
                </div>
            </div>
        )
    }
}

export default ContactPage