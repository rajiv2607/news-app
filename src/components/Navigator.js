import React from 'react'
import { Navbar, Form, FormControl, Button, Badge, Nav } from 'react-bootstrap';
import store from '../store/store';
import * as actions from "../actions/Actions"
import { Link } from 'react-router-dom'

class Navigator extends React.Component {

    handleTechNewsClick() {
        store.dispatch(actions.fetchTechNews())
    }

    handleAppleNewsClick() {
        store.dispatch(actions.fetchAppleNews())
    }


    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">News Today</Navbar.Brand>
                    <Button variant="primary">
                        Top <Badge variant="light">Headlines</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" class="mr-sm-2" id='searchBar' />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                    <Button variant="dark" ><Link to="/apple-news"  onClick={this.handleAppleNewsClick}  > Apple News</Link></Button>
                    <Button variant="dark" ><Link to="/technology-news"  onClick={this.handleTechNewsClick} > Tchnology News</Link></Button>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default Navigator