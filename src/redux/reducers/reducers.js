import { combineReducers } from 'redux';

let reducers = combineReducers({
    UserInfo: function(state = {}, action) {
        switch(action.type) {
            case 'GET_SUCCESS':
                return action.payload;
            default:
                return state;
        }
    },
    NoInfo: function(state = {}, action) {
        switch(action.type) {
            case 'GET_FAIL':
                return action.payload;
            default:
                return state;
        }
    },
    ApplyDetail:function (state = {} , action) {
        // switch(action.type) {
        //     case GET_ORDER_DETAIL:
                return action.payload || '';
        //     default:
        //         return state;
        // }
    }
});

export default reducers;
