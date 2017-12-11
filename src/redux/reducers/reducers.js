import { combineReducers } from 'redux';
import {
    GET_SUCCESS,
    GET_FAIL
} from '../actions/actions';

let reducers = combineReducers({
    UserInfo: function(state = {}, action) {
        switch(action.type) {
            case GET_SUCCESS:
                return action.payload;
            default:
                return state;
        }
    },
    NoInfo: function(state = {}, action) {
        switch(action.type) {
            case GET_FAIL:
                return action.payload;
            default:
                return state;
        }
    }
});

export default reducers;
