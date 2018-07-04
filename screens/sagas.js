import { all, fork } from "redux-saga/effects";
import * as users_sagas from './register/saga';

export default function* rootSaga() {
    yield all([
        ...Object.values(users_sagas)
    ].map(fork));
} 