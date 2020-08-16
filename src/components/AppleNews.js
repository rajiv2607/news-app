import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'

export class AppleNews extends Component {

    render() {
        return (
            <div>
                <div>
                   <Header heading= "Latest Apple News for you .."/>
                </div>
                <div className='technews-container'>
                    <Card fetchedData={this.props.fetchAppleNews} ></Card>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchAppleNews: state.fetchAppleNews
    };
};

export default connect(mapStateToProps, null)(AppleNews)
