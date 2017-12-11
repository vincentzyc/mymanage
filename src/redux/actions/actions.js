import api from '../../common/api';
/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

function getSuccess(data) {
    return {
        type: GET_SUCCESS,
        payload: data
    }
}
export function getFail() {
    return (dispatch)=> {
        api.jqPost('supermarketloan/getlist','',(res)=>{
            return dispatch({
                type: GET_FAIL,
                payload: res
            });
        })
    }
}
export function getUserInfo() {
    return (dispatch)=> {
        api.jqPost('/api/user','',(res)=>{
            dispatch(getSuccess(res));
        })
    }
}