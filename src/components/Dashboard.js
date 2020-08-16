import React from 'react'
import { connect } from "react-redux";
import store from '../store/store';
import * as actions from "../actions/Actions"
import Card from './Card'
import Loader from './Loader'
import Navigator from './Navigator'
import WeatherComponent from './WeatherComponent'
import LeftCompoenent from './LeftCompoenent'
import Footer from './Footer';

export class DashBoard extends React.Component {

    componentDidMount() {
        store.dispatch(actions.fetchData())
    }

    render() {

        {
            if (this.props.isloading) {
                return (
                    <>
                        <Loader />
                    </>
                )
            }
        }

        return (
            <>
                <Navigator />
                <Card fetchedData={this.props.fetchedData} />
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        currentState: state,
        fetchedData: state.fetchedData,
        isloading: state.isloading
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         // inc: () => {
//         //     dispatch(actions.incrementAsync());
//         // },

//         // dec: () => {
//         //     dispatch(actions.decrement());
//         // }
//     };
// };

export default connect(
    mapStateToProps,
    null
)(DashBoard);
