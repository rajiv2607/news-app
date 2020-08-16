import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'

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
