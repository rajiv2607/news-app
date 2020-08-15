
import * as Actions from "../actions/ActionConstants";

let initialState = {
    fetchedData: [],
    isloading: true,
    errorOccured: false
};

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.FETCH_DONE: {
            state.fetchedData = action.articles
            state.isloading = false
            return {
                ...state
            }
        }

        case Actions.FETCH_ERROR: {
            state.errorOccured = true

            return {
                ...state
            }
        }

        default:
            return state;
    }
}