import Mock from 'mockjs';

// Mock.mock(/supermarketloan/, {}) 正则 所有包含supermarketloan的url

Mock.mock('/api/user', {
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