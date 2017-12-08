import React, { Component } from "react";
import api from "../common/api";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
            gridData: [],
            selectedIndex:1,
            allData: { headbannerItem: [], funcviewItem: [] }
        };
    }
    componentWillMount() {
        let gridData = [];
        api.vkcPost("supermarketloan/homepage/allviews", { param: {} }, res => {
            console.log(res);
            res.funcviewItem.forEach(v => {
                gridData.push({
                    icon: v.logo,
                    text: v.tagName
                });
            });
            this.setState({ gridData: gridData });
            this.setState({ pageLoading: false });
            this.setState({ allData: res });
        });
    }

    render() {
        return (
            <div>
                <img
                    src={require("../common/img/logo.svg")}
                    alt="logo"
                    onClick={() => {
                        this.props.history.push("/me");
                    }}
                />
            </div>
        );
    }
}
export default Home;
