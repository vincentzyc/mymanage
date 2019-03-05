import React, { Component } from "react";
import { connect } from "react-redux";
import { getApplyDetail } from "../../redux/actions/actions";
import { Table } from "antd";
import api from "../../common/api";

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: "产品名称",
                    dataIndex: "productName"
                },
                {
                    title: "产品类型",
                    dataIndex: "productType"
                },
                {
                    title: "申请号码",
                    dataIndex: "phone"
                },
                {
                    title: "申请金额",
                    dataIndex: "amount"
                },
                {
                    title: "申请期限",
                    dataIndex: "deadline"
                },
                {
                    title: "申请时间",
                    dataIndex: "applyTime"
                },
                {
                    title: "平台类型",
                    dataIndex: "platformType"
                },
                {
                    title: "推广渠道",
                    dataIndex: "promotionChannel"
                },
                {
                    title: "申请状态",
                    dataIndex: "applyResultStatus"
                },
                {
                    title: "操作",
                    dataIndex: "action",
                    render: (text, record) => <a onClick={() => this.props.getApplyDetail(text, record,props)}>详情</a>
                }
            ],
            totalCount: "",
            dataList: {}
        };
    }
    componentWillMount() {
        this.getDataList(1,10);
    }
    // setApplyId(text, record){
    //     console.log(text, record);
    // }
    getDataList = (current, pageSize) => {
        // console.log(current, pageSize);
        let param = {
            param: {
                phone: "",
                applyResultStatus: "",
                productType: "",
                productName: "",
                applyStartTime: "",
                applyEndTime: "",
                platformType: "",
                promotionChannel: "",
                pageIndex: current,
                pageSize: pageSize
            }
        };
        api.jqPost("supermarketloan/mgr/loanapply/getuserloanapply", param, res => {
            console.log(res);
            if (res.code === "0") {
                // res.data.forEach((element, index) => {
                //     element["key"] = index;
                // });
                this.setState({ dataList: res.data });
                this.setState({ totalCount: res.totalCount });
            }
        });
    };  
    render() {
        if (Object.keys(this.state.dataList).length === 0) return false;
        return (
            <div>
                <Table  className="table-center" 
                        columns={this.state.columns} 
                        dataSource={this.state.dataList} 
                        rowKey="applyId" 
                        bordered 
                        pagination={{ 
                            total: this.state.totalCount,
                            showTotal:() => `Total ${this.state.totalCount} items`,
                            onShowSizeChange:this.getDataList,
                            onChange: this.getDataList,
                            pageSizeOptions:['10', '20', '30', '40', '50'],
                            showQuickJumper:true,
                            showSizeChanger:true
                        }} 
                />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {

//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        getApplyDetail: (text, record, props) => {
            props.changeState(true);
            setTimeout(()=>{
              return dispatch(getApplyDetail({"订单id":record.applyId}));
            },200)
        }
    };
};

export default connect('', mapDispatchToProps)(TableList);
