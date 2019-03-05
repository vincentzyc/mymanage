import React, { Component } from "react";
import OrderList from "./orderList";
import OrderDetail from "./orderDetail";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
            // allData: {}
        };
    }
    changeState = val => {
        this.setState({
            showDetail: val
        });
    };
    // componentWillMount() {
    //     api.vkcPost("supermarketloan/mgr/homepage", "", res => {
    //         this.setState ({allData : res})
    //     });
    // }

    render() {
        // if(Object.keys(this.state.allData).length===0) return false;
        return <div>{this.state.showDetail === false ? <OrderList changeState={this.changeState} /> : <OrderDetail changeState={this.changeState}/>}</div>;
    }
}
export default Home;
