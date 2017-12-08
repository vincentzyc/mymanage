import React, { Component } from "react";
import { ActivityIndicator, Grid, Carousel } from "antd-mobile";
import api from "../../common/api";

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
                <ActivityIndicator toast animating={this.state.pageLoading} className="pageloading" />
                <img
                    src={require("../../common/img/logo.svg")}
                    alt="logo"
                    onClick={() => {
                        this.props.history.push("/me");
                    }}
                />
                <Carousel autoplay infinite autoplayInterval={2000} selectedIndex={this.state.selectedIndex}>
                    {this.state.allData.headbannerItem.length > 0
                        ? this.state.allData.headbannerItem.map((item, index) => {
                              return (
                                  <a key={index} href={item.linkUrl} style={{ display: 'inline-block', width: '100%', height: "200px" }}>
                                      <img
                                          src={item.logo}
                                          alt={item.tagName}
                                          onLoad={() => {
                                              window.dispatchEvent(new Event("resize"));
                                              setTimeout(() => {
                                                //   暂时解决首次加载时不轮播bug
                                                this.setState({ selectedIndex: 0 });
                                              }, 0);
                                          }}
                                          style={{ width: "100%",height:'200px'}}
                                      />
                                  </a>
                              );
                          })
                        : ""}
                </Carousel>

                <Grid data={this.state.gridData} columnNum={4} />
            </div>
        );
    }
}
export default Home;
