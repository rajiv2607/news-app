
import * as Actions from "../actions/ActionConstants";

/**
 *  This is reducer with initial state , where we are changing the state and returning it to compoennt to render accordingly .
 *  
 */

let initialState = {
    fetchedData: [],
    isloading: true,
    errorOccured: false,
    fetchTechNews : [],
    fetchAppleNews : [],
    isTechnewloading : true,
    isAppleNewsLoading : true,
    searchResult : [[],{}]

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
            let newState = Object.assign({}, state);
            newState.errorOccured = true
            return {
                ...newState
            }
        }

        case Actions.FETCH_TECH_SUCCESS:{
            let newState = Object.assign({}, state);
            newState.isTechnewloading = false
            newState.fetchTechNews = action.articles
            return {
                ...newState
            }
        }

        case Actions.FETCH_TECH_ERROR:{
            let newState = Object.assign({}, state);
            newState.errorOccured = true
            return {
                ...newState
            }
        }

        case Actions.FETCH_APPLE_SUCCESS:{
            let newState = Object.assign({}, state);
            newState.fetchAppleNews = action.articles
            newState.isAppleNewsLoading = false
            return {
                ...newState
            }
        }



        case Actions.FETCH_APPLE_ERROR:{
            let newState = Object.assign({}, state);
            newState.errorOccured = true
            return {
                ...newState
            }
        }

        case Actions.SEARCH_KEYWORD_SUCCESS:{
            let newState = Object.assign({}, state);
            newState.searchResult = [action.articles,action.status]
            return {
                ...newState
            }
        }
        default:
            return {...state}
    }
}