import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { members, editData } from './teammanagement/reducers/index';

const reducers = {
    form: formReducer,
    members,
    editData
};

const store = createStore(combineReducers(reducers));

export default store;
