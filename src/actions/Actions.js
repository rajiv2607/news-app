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

export function fetchTechNews(){
    
    return{
        
        type: Actions.FETCH_TECH
    }
}


export function fetchedTechNews(articles) {
    return {
        type: Actions.FETCH_TECH_SUCCESS,
        articles
    }
}

export function fetchAppleNews(){
    return{
        type: Actions.FETCH_APPLE
    }
}


export function fetchedApplehNews(articles) {
    return {
        type: Actions.FETCH_APPLE_SUCCESS,
        articles
    }
}

export function searchByKeyWord(keyword){
    return{
        type: Actions.SEARCH_KEYWORD,
        keyword
    }
}


export function searchByKeyWordResult(articles) {
    return {
        type: Actions.FETCH_APPLE_SUCCESS,
        articles
    }
}