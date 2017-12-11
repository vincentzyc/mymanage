import React from "react";
import { Menu } from "antd";

class Sider extends React.Component {
    defaultSelectedKeys = () => (this.props.location.pathname !== "/" ? this.props.location.pathname : "/home");
    handleClick = e => {
        if(this.props.location.pathname===e.key) return false;
        this.props.history.push(e.key);
    };
    render() {
        return (
            <div className="sidebar">
                <Menu onClick={this.handleClick} style={{ width: 250 }} defaultSelectedKeys={[this.defaultSelectedKeys()]} mode="inline" theme="dark">
                    <Menu.Item key="/home">Home</Menu.Item>
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
