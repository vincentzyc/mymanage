import Mock from 'mockjs';
import api from '../common/api';
// Mock.mock(/supermarketloan/, {}) 正则 所有包含supermarketloan的url
Mock.setup({
    timeout: '30-500'
})

Mock.mock(api.baseUrl()+'getuserinfo', {
    'name': '@cname',
    'age|10-76': 20
});

Mock.mock(api.baseUrl()+'login', {
    'code': 0,
    'name': '@cname',
    'age|10-76': 20
});

Mock.mock('supermarketloan/homepage/allviews', {
    'list|1-10': [{
        widgetName: "@name",
        'widgetCate|1': ["输入框","单选框","下拉框"],
        'widgetState|1': ["0","1"]
    }]
})
Mock.mock('supermarketloan/getlist', {
    'list|1-10': [{
        widgetName: "@name",
    }]
})