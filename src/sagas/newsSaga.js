import { put, takeEvery, call } from 'redux-saga/effects'
import * as Actions from '../actions/ActionConstants'
import { fetchData, fetchTech , fetchApple} from '../resources/fetchApi'


function isError(status) {
    return (status === "error") ? true : false
}

export function* fetchApi() {
    const { articles, status } = yield call(fetchData);
    if (isError(status)) {
        yield put({ type: Actions.FETCH_ERROR, status });
    }
    yield put({ type: Actions.FETCH_DONE, articles });
}


export function* fetchTechNews() {
    const { articles, status } = yield call(fetchTech);
    if (isError(status)) {
        yield put({ type: Actions.FETCH_TECH_ERROR, status });
    }
    yield put({ type: Actions.FETCH_TECH_SUCCESS, articles });
}

export function* fetchAppleNews() {
    const { articles, status } = yield call(fetchApple);
    if (isError(status)) {
        yield put({ type: Actions.FETCH_APPLE_ERROR, status });
    }
    yield put({ type: Actions.FETCH_APPLE_SUCCESS, articles });
}

export default function* newsSaga() {
    yield takeEvery(Actions.FETCHING_DATA, fetchApi)
    yield takeEvery(Actions.FETCH_TECH, fetchTechNews)
    yield takeEvery(Actions.FETCH_APPLE, fetchAppleNews)

}