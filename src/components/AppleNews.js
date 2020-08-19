import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'
export class AppleNews extends Component {


/**
 * Component to render the news reated to Apple when we click on the "Apple news" from Navigator
 */
    render() {

        if (this.props.isAppleNewsLoading) {
            return (
                <>
                    <Loader />
                </>
            )
        } else {
            return (
                <div>
                    <div>
                        <Header heading="Latest Apple News for you .." />
                    </div>
                    <div className='technews-container'>
                        <Card fetchedNews={this.props.fetchAppleNews} ></Card>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        fetchAppleNews: state.fetchAppleNews,
        isAppleNewsLoading: state.isAppleNewsLoading
    };
};

export default connect(mapStateToProps, null)(AppleNews)
