import Mock from "mockjs";
import api from "../common/api";
// Mock.mock(/supermarketloan/, {}) 正则 所有包含supermarketloan的url
Mock.setup({
	timeout: "30-500"
});

Mock.mock(api.baseUrl() + "getuserinfo", {
	name: "@cname",
	"age|10-76": 20
});

Mock.mock(api.baseUrl() + "login", {
	code: 0,
	name: "@cname",
	"age|10-76": 20
});

Mock.mock(api.baseUrl() + "api/user", {
	code: 0,
	name: "@cname",
	"age|10-76": 20
});

Mock.mock(api.baseUrl() + "supermarketloan/homepage/allviews", {
	"list|1-10": [{
		widgetName: "@name",
		"widgetCate|1": ["输入框", "单选框", "下拉框"],
		"widgetState|1": ["0", "1"]
	}]
});
Mock.mock(api.baseUrl() + "supermarketloan/getlist", {
	"list|1-10": [{
		widgetName: "@name"
	}]
});

Mock.mock(api.baseUrl() + "homepage", {
	API: {
		"limitToday|0-9999": 20,
		"limitYesterday|0-9999": 20,
		"limitMonth|0-9999": 20,
		"limitAll|0-9999": 20,
		"limitTodaySuss|0-9999": 20,
		"limitYesterdaySuss|0-9999": 20,
		"limitMonthSuss|0-9999": 20,
		"limitAllSuss|0-9999": 20,
	},
	MIX: {
		"limitTodayMix|0-9999": 20,
		"limitYesterdayMix|0-9999": 20,
		"limitMonthMix|0-9999": 20,
		"limitAllMix|0-9999": 20
	}
});

Mock.mock(api.baseUrl() + "supermarketloan/mgr/loanapply/getuserloanapply", {
	code: '0',
	"data|1-10": [{
		"applyId|1-99999": 1,
		productName: '@name',
		productType: '@name',
		phone: '@name',
		amount: '@name',
		deadline: '@name',
		applyTime: '@name',
		platformType: '@name',
		promotionChannel: '@name',
		applyResultStatus: '@name'
	}],
	"totalCount|1-500": 1
});