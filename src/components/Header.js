import React from 'react'
import { Navbar, Form, FormControl, Button, Badge } from 'react-bootstrap';

class Header extends React.Component {
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
                        <FormControl type="text" placeholder="Search" class="mr-sm-2" id='searchBar'/>
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </>
        )
    }
}

export default Header