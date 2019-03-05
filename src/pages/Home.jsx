import React, { Component } from "react";
import { Row, Col } from "antd";
import api from "../common/api";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: {}
        };
    }
    componentWillMount() {
        api.jqPost("homepage", "", res => {
            this.setState ({allData : res})
        });
    }

    render() {
        if (Object.keys(this.state.allData).length === 0) return false;
        return (
            <div>
                <h1>API</h1>
                <Row align="middle">
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>今日申请数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.API.limitToday}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>昨日申请数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.API.limitYesterday}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>当月申请数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.API.limitMonth}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>累计申请数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.API.limitAll}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>今日成功数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.API.limitTodaySuss}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>昨日成功数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.API.limitYesterdaySuss}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>当月成功数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.API.limitMonthSuss}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>累计成功数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.API.limitAllSuss}</p>
                    </Col>
                </Row>
                <h1>聚合</h1>
                <Row>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>今日申请数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.MIX.limitTodayMix}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>昨日申请数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.MIX.limitYesterdayMix}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>当月申请数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.MIX.limitMonthMix}</p>
                    </Col>
                    <Col className="text-center lh30 mg-b10" span={6}>
                        <h3>累计申请数</h3>
                        <p className="c4db3ff fs20">{this.state.allData.MIX.limitAllMix}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Home;
