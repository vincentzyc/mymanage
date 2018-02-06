import api from '../../common/api';
/*
在ActionCreator里面完成数据的获取与处理的工作。并且通过向store发送各个组合的action，从而达到控制界面展示的内容实现交互。
 */

function getSuccess(data) {
    return {
        type: 'GET_SUCCESS',
        payload: data
    }
}

export function getList(data) {
    return {
        type: 'GET_FAIL',
        payload: data
    }
}
export function getUserInfo() {
    return (dispatch)=> {
        api.jqPost('api/user','',(res)=>{
            dispatch(getSuccess(res));
        })
    }
}
export function getApplyDetail(data) {
    return {
        type: 'GET_APPLYID_DETAIL',
        payload: data
    }
}
