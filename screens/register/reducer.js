import Immutable from 'immutable';
import { RECEIVE_USERS, USER_ERROR } from './actions';

const initialState = Immutable.fromJS({
    list: {},
    error: {}
});

export default (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_USERS:
            return state.set('list', Immutable.fromJS(action.users))
        case USER_ERROR:
            return state.set('error', Immutable.fromJS(action.message))
        default:
            return state
    }

}