import { delay, put, takeEvery , call} from 'redux-saga/effects'
import * as Actions from '../actions/ActionConstants'
import {fetchData} from '../resources/fetchApi'


export function* fetchApi() {
        console.log(URL)
        const { articles, error  } = yield call(fetchData);
        if(error) {
            yield put({ type: Actions.FETCH_ERROR, error});
        }
        yield put({ type: Actions.FETCH_DONE, articles});
}

export default function* newsSaga() {
    yield takeEvery(Actions.FETCHING_DATA, fetchApi)
}