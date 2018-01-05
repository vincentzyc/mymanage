import React from "react";
import { Menu } from "antd";

class Sider extends React.Component {
    handleClick = e => {
        if(this.props.location.pathname===e.key) return false;
        this.props.history.push(e.key);
    };
    render() {
        return (
            <div className="sidebar">
                <Menu onClick={this.handleClick} style={{ width: 250 }} defaultSelectedKeys={[this.props.location.pathname]} mode="inline" theme="dark">
                    <Menu.Item key="/">Home</Menu.Item>
                    <Menu.Item key="/order">申请订单管理</Menu.Item>
                    <Menu.Item key="/roster">Roster</Menu.Item>
                    <Menu.Item key="/todolist">TodoList</Menu.Item>
                    <Menu.Item key="/me">Me</Menu.Item>
                    <Menu.Item key="/checkphone">CheckPhone</Menu.Item>
                    <Menu.Item key="/userinfo">UserInfo</Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Sider;
