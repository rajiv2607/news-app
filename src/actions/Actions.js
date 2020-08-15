import * as Actions from './ActionConstants'


export function fetchData() {
return {
    type:Actions.FETCHING_DATA
}
}

export function fetchSuccess(articles) {
    return {
        type: Actions.FETCH_DONE,
        articles
    }
}


export function fetchError(error) {
    return{
        type: Actions.FETCH_ERROR,
       error
    }
}