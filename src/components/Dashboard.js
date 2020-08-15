import React from 'react'
import { connect } from "react-redux";
import store from '../store/store';
import * as actions from "../actions/Actions"
import Card from './Card'
import Loader from './Loader'
import Header from './Header'
import WeatherComponent from './WeatherComponent'
import LeftCompoenent from './LeftCompoenent'

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
                <Header />
               
                <Card fetchedData={this.props.fetchedData} />
                <WeatherComponent/>
                {/* <LeftCompoenent/> */}
            </>
        )
    }
}


const mapStateToProps = state => {
    console.log(state, "state")
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
