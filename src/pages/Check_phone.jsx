import React, { Component } from "react";
import api from "../common/api";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            result: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value) {
        this.setState({ result: "" });
        this.setState({ value: value });
    }

    handleClick() {
        let data = {};
        data.param = `{phoneNo:${this.state.value.replace(/\s+/g, "")}}`;
        setTimeout(() => {
            api.jqPost("http://isp.gzjunbo.net/integeration/getPackages", data, res => {
                console.log(res);
                res.code === "0" ? this.setState({ result: "是移动号码" }) : this.setState({ result: "非移动号码" });
            });
        }, 200);
    }

    render() {
        return (
            <div className="mg20">
                <h1 className="mg-b20">验证是否为移动号码</h1>
                <input type="phone" value={this.state.value} onChange={this.handleChange} placeholder="188 2622 9916" />
                    手机号码
                <h3 className="mg-t20 mg-b20 flex align-middle">
                    输入号码：{this.state.value}
                    <button className="mg-l20" type="warning" inline size="small" onClick={this.handleClick}>
                        确定
                    </button>
                </h3>
                <p>验证结果：{this.state.result}</p>
            </div>
        );
    }
}
export default Home;
