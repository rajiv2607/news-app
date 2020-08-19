import { put, takeEvery, call } from 'redux-saga/effects'
import * as Actions from '../actions/ActionConstants'
import { fetchData, fetchTech , fetchApple, getSearchData} from '../resources/fetchApi'
import {isError} from '../utils/utils'


/**
 *  Here all the Async requests are sent to the required function and sent back the data to actions 
 */


export function* fetchApi() {
    const { articles, status } = yield call(fetchData);
    if (isError(status)) {
        yield put({ type: Actions.FETCH_ERROR, status });
    }
    yield put({ type: Actions.FETCH_DONE, articles });
}

/**
 * For fetching TechNews 
 */
export function* fetchTechNews() {
    const { articles, status } = yield call(fetchTech);
    if (isError(status)) {
        yield put({ type: Actions.FETCH_TECH_ERROR, status });
    }
    yield put({ type: Actions.FETCH_TECH_SUCCESS, articles });
}

/**
 * for fetching Apple news 
 */
export function* fetchAppleNews() {
    const { articles, status } = yield call(fetchApple);
    if (isError(status)) {
        yield put({ type: Actions.FETCH_APPLE_ERROR, status });
    }
    yield put({ type: Actions.FETCH_APPLE_SUCCESS, articles });
}

/**
 *  for fetching the search with the keyword 
 * @param {*} action - action foe the aditional information to pass - "Keyword"
 */
export function* searchNyKeyWord(action) {
    const { articles, status } = yield call(getSearchData,action.keyword);
    if (isError(status)) {
        yield put({ type: Actions.SEARCH_KEYWORD_ERROR, status });
    }
    yield put({ type: Actions.SEARCH_KEYWORD_SUCCESS, articles });
}


/**
 *  this Generator function is added a middleware
 */

export default function* newsSaga() {
    yield takeEvery(Actions.FETCHING_DATA, fetchApi)
    yield takeEvery(Actions.FETCH_TECH, fetchTechNews)
    yield takeEvery(Actions.FETCH_APPLE, fetchAppleNews)
    yield takeEvery(Actions.SEARCH_KEYWORD, searchNyKeyWord)
}