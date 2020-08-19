import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'


/**
 * Component to render the news reated to Technology when we click on the "Tech news" from Navigator
 */

export class TechNews extends Component {
    render() {

        if (this.props.isTechnewloading) {
            return (
                <>
                    <Loader />
                </>
            )
        } else {
            return (
                <div>
                    <div>
                        <Header heading="Latest Technology News for you .." />
                    </div>
                    <div className='technews-container'>
                        <Card fetchedNews={this.props.fetchTechNews} />
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
        fetchTechNews: state.fetchTechNews,
        isTechnewloading: state.isTechnewloading
    };
};

export default connect(mapStateToProps, null)(TechNews)
