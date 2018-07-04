import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import users from './register/reducer'

export default combineReducers({
    users,
    form: reduxFormReducer, // mounted under "form"
});