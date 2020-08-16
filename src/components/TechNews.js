import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'

export class TechNews extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header heading="Latest Technology News for you .." />
                </div>
                <div className='technews-container'>
                    <Card fetchedData={this.props.fetchTechNews} />
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
        fetchTechNews: state.fetchTechNews
    };
};

export default connect(mapStateToProps, null)(TechNews)
