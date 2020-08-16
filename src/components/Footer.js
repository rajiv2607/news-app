import React, { Component } from 'react'
import { Alert, Navbar,Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Alert className='back-to-home'><Link to='/'> Back to home</Link></Alert>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
