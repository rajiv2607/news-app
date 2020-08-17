import React from 'react'
import { connect } from "react-redux";
import store from '../store/store';
import * as actions from "../actions/Actions"
import Card from './Card'
import Loader from './Loader'
import Navigator from './Navigator'
import Error from './Error'

export class DashBoard extends React.Component {

    state = {
        errorOccured: false
    }

    componentDidMount() {
        store.dispatch(actions.fetchData())
    }

    componentDidCatch() {
        this.setState({
            errorOccured: true
        })
    }

    render() {

        if (this.props.isloading) {
            return (
                <>
                    <Loader />
                </>
            )
        } else if (this.state.errorOccured) {
            return (
                <Error />
            )
        } else {
            return (
                <>
                    <Navigator />
                    <Card fetchedNews={this.props.fetchedData || []} />
                </>
            )
        }
    }
}



const mapStateToProps = state => {
    return {
        currentState: state,
        fetchedData: state.fetchedData,
        isloading: state.isloading
    };
};

export default connect(mapStateToProps)(DashBoard);
