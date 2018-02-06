import React from "react";
import { Input, Button } from "antd";
import api from "../common/api";

class CheckPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            result: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ result: "" });
        this.setState({ value: e.target.value });
    }

    handleClick() {
        let data = {};
        data.param = `{phoneNo:${this.state.value.replace(/\s+/g, "")}}`;
        api.jqPost("http://isp.gzjunbo.net/integeration/getPackages", data, res => {
            // console.log(res);
            res.code === "0" ? this.setState({ result: "是移动号码" }) : this.setState({ result: "非移动号码" });
        });
    }

    render() {
        return (
            <div className="mg20">
                <h1 className="mg-b20">验证是否为移动号码</h1>
                <Input type="tel" value={this.state.value} maxLength="11" onChange={this.handleChange} placeholder="请输入手机号码" />
                <h3 className="mg-t20 mg-b20 flex align-middle">
                    输入的号码：{this.state.value}
                    <Button type="primary" onClick={this.handleClick}>
                        确定
                    </Button>
                </h3>
                <p>验证结果：{this.state.result}</p>
            </div>
        );
    }
}
export default CheckPhone;
