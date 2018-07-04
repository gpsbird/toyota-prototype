import { put, call, take, takeLatest } from 'redux-saga/effects'
import _ from 'lodash'
import moment from 'moment'
import { FETCH_USERS, ADD_USER, LOGIN_SUCCESS, receiveUsers, userError, loginSuccess, resetUser } from './actions'
import rsf from "../data"

const formatUser = (user) => {

    let name = _.startCase(_.toLower(user.name));
    let email = _.toLower(user.email);
    let username = _.toLower(user.username);
    let created_on = new moment().format('MMM Do YYYY');

    return {
        name,
        email,
        phone: user.phone,
        password: user.password,
        username,
        created_on
    }
};

function* loginSaga(action) {
    try {
        const data = yield call(rsf.auth.signInWithEmailAndPassword, action.email, action.password);
        yield put(loginSuccess(data.user));
    }
    catch (error) {
        yield put(userError(error));
    }
}

// worker Saga: will be fired on FETCH_USERS actions
function* getUsers() {
    try {

        const channel = yield call(rsf.database.channel, 'users');

        while (true) {
            const { value: users } = yield take(channel);
            yield put(receiveUsers(users));
        }

    } catch (e) {
        yield put(userError(e.message));
    }
}

// worker Saga: will be fired on ADD_USER actions
function* newUser(action) {
    yield call(rsf.database.create, 'users', formatUser(action.user));
    yield put(resetUser(''))
}

export function* getUserSaga() {
    yield takeLatest(FETCH_USERS, getUsers);
}

export function* newUserSaga() {
    yield takeLatest(ADD_USER, newUser);
}
