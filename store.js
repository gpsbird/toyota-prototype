import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './screens/reducers'
import rootSaga from './screens/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const enhancers = compose(
    applyMiddleware(...middleware)
);

// mount it on the Store
const store = createStore(
    reducer,
    enhancers
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store