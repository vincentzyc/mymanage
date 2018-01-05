import React, { Component } from "react";
import OrderTable from './order-table';
// import { Row, Col } from "antd";
// import api from "../common/api";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // allData: {}
        };
    }
    // componentWillMount() {
    //     api.vkcPost("supermarketloan/mgr/homepage", "", res => {
    //         this.setState ({allData : res})
    //     });
    // }

    render() {
        // if(Object.keys(this.state.allData).length===0) return false;
        return (
            <div>
                <OrderTable />
            </div>
        );
    }
}
export default Home;
