import React, { Component } from "react";
import api from "../common/api";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentWillMount() {
        api.jqPost("supermarketloan/homepage/allviews", { param: {} }, res => {
            console.log(res);
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
