import React from 'react'
import { Navbar, Form, Button, Badge, Nav } from 'react-bootstrap';
import store from '../store/store';
import * as actions from "../actions/Actions"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import ListView from './ListView';

class Navigator extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyWordSearch = this.handleKeyWordSearch.bind(this)
        this.debouncing = this.debouncing.bind(this)
        this.handleAppleNewsClick = this.handleAppleNewsClick.bind(this)
        this.handleTechNewsClick = this.handleTechNewsClick.bind(this)
        this.state = {
            currentKeyWord: ""
        }


    }


    handleTechNewsClick() {
        store.dispatch(actions.fetchTechNews())
    }

    handleAppleNewsClick() {
        store.dispatch(actions.fetchAppleNews())
    }


    debouncing(callback) {
        let timing = 0
        console.log("Dobouncung ")
        return function () {
            if (timing) {
                clearTimeout(timing)
            }

            timing = setTimeout(() => {
                callback()
            }, 1000)
        }
    }



    handleKeyWordSearch(event) {
        let keyword = event.target.value
        this.setState({
            currentKeyWord: event.target.value
        })

        this.props.sentSearchReq(keyword)

    }

    render() {

        let [searchResult , status ] = this.props.searchResult

        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >Latest News</Navbar.Brand>
                    <Button variant="primary">
                        Top <Badge variant="light">Headlines</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button>
                    <Form inline>
                        <input ref={this.search} type="text" placeholder="Search" class="mr-sm-2" id='searchBar' onChange={this.handleKeyWordSearch} />
                        <Button variant="outline-light">Search</Button>
                    </Form>

                    <Nav className="mr-auto">
                        <Button variant="dark" ><Link to="/apple-news" onClick={this.handleAppleNewsClick}  > Apple News</Link></Button>
                        <Button variant="dark" ><Link to="/technology-news" onClick={this.handleTechNewsClick} > Tchnology News</Link></Button>
                    </Nav>

                </Navbar>
                {
                    <div className='suggestion-container'>
                        {
                            (this.state.currentKeyWord  || status !=="error") ? <ListView searchedData={searchResult || []} /> : null
                        }
                    </div>
                }

                
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchResult: state.searchResult,
    };
};


const mapdispatchtoprops = dispatch => {
    return {
        sentSearchReq: (keyword) => {
            dispatch({
                type: "SEARCH_KEYWORD",
                keyword
            })
        }
    }
}

export default connect(mapStateToProps, mapdispatchtoprops)(Navigator)