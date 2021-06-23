import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ContactPage.css'

class ContactPage extends Component {
  
    render() {
        return(
            <div className="contact-container">
                <h1 className='page-heading'>Contact Us</h1>
                <div className='contact-subinfo'>
                    <p>The menus at Walt Disney World are always changing.  So we may not always be up to date.                
                    <br />
                    <br />
                    But that's where you can help add to the magic...
                    <br />
                    <br />
                    If you know of a meal we missed and want to share the magic, let us know about it!
                    <br />
                    <br />
                    Click on the button below, and fill out the form with as much information as you can and we'll add it to our options!     
                </p>
                </div>
                <div >
                  <button className='link-to-share'><Link to={'/contact-form'} className='share-link'>Click To Share</Link></button>  
                </div>
            </div>
        )
    }
}

export default ContactPage