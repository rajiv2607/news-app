import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Alert} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <div>
                 <Alert className ='headers-view'variant='secondary'>{this.props.heading}</Alert>
                    <Alert className='back-to-home'><Link to='/'> Back to home</Link></Alert>
            </div>
        )
    }
}
