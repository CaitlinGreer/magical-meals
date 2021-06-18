import React, { Component } from 'react'
import './RestrictionsIcons.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

class RestrictionsIcons extends Component {
    render() {
        let isVeganImage = ''
        let isVegetarianImage = ''
        let isGlutenfreeImage = ''

        if (this.props.is_vegan === true) {
            isVeganImage = <FontAwesomeIcon icon={faCheckSquare} alt='true' className='check' />
        } 
        if (!this.props.is_vegan) {
            isVeganImage = <FontAwesomeIcon icon={faTimesCircle} alt='false' className='x'/>
        }

        if (this.props.is_vegetarian === true) {
            isVegetarianImage = <FontAwesomeIcon icon={faCheckSquare} alt='true' className='check'/>
        } 
        if (!this.props.is_vegetarian) {
            isVegetarianImage = <FontAwesomeIcon icon={faTimesCircle} alt='false' className='x'/>
        }

        if (this.props.is_glutenfree === true) {
            isGlutenfreeImage = <FontAwesomeIcon icon={faCheckSquare} alt='true' className='check'/>
        } 
        if (!this.props.is_glutenfree) {
            isGlutenfreeImage = <FontAwesomeIcon icon={faTimesCircle} alt='false' className='x'/>
        }

        return (
            <div className='icons-container'>
                <div className='vegan'>
                    <br />Vegan:  {isVeganImage}
                </div>
                <div className='vegetarian'>
                    <br />Vegetarian:  {isVegetarianImage}
                </div>
                <div className='gluten-free'>
                    <br />Gluten Free:  {isGlutenfreeImage}
                </div>
            </div>
        )
    }
}

export default RestrictionsIcons