
import * as Actions from "../actions/ActionConstants";

let initialState = {
    fetchedData: [],
    isloading: true,
    errorOccured: false,
    fetchTechNews : [],
    fetchAppleNews : [],
    isTechnewloading : true,
    isAppleNewsLoading : true

};

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.FETCH_DONE: {
            var newState = Object.assign({}, state);
            newState.fetchedData = action.articles
            newState.isloading = false
            return {
                ...newState
            }
        }

        case Actions.FETCH_ERROR: {
            var newState = Object.assign({}, state);
            newState.errorOccured = true
            return {
                ...newState
            }
        }

        case Actions.FETCH_TECH_SUCCESS:{
            var newState = Object.assign({}, state);
            newState.isTechnewloading = false
            newState.fetchTechNews = action.articles
            return {
                ...newState
            }
        }

        case Actions.FETCH_TECH_ERROR:{
            var newState = Object.assign({}, state);
            newState.errorOccured = true
            return {
                ...newState
            }
        }

        case Actions.FETCH_APPLE_SUCCESS:{
            var newState = Object.assign({}, state);
            newState.isAppleNewsLoading = false
            newState.fetchAppleNews = action.articles
            return {
                ...newState
            }
        }

        case Actions.FETCH_APPLE_ERROR:{
            var newState = Object.assign({}, state);
            newState.errorOccured = true
            return {
                ...newState
            }
        }
        default:
            return {...state}
    }
}