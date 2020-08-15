import { createStore , applyMiddleware} from 'redux'
import newsReducer from '../reducers/newsReducer'
import newsSaga from '../sagas/newsSaga'
import createSagaMiddleware from 'redux-saga';


let sagaMiddleWare = createSagaMiddleware();

let store = createStore(newsReducer, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(newsSaga)

export default store