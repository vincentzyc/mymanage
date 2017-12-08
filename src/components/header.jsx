import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon } from "antd";
class Header extends React.Component {
    render() {
        const userName = window.localStorage.getItem("y_userName");
        const menu = (
            <Menu>
                <Menu.Item>
                    <a
                        rel="noopener noreferrer"
                        onClick={() => {
                            window.localStorage.removeItem("y_userName");
                            window.location.replace("/login");
                        }}
                    >
                        安全退出
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <header className="topbar">
                <div className="topbar-container">
                    <Link to="/">
                        <img className="topbar-logo" src={require("../common/img/logo.svg")} alt="logo" />
                    </Link>
                    <div className="topbar-userinfo">
                        <Dropdown overlay={menu} trigger={["click"]}>
                            <a className="ant-dropdown-link">
                                Hello {userName} <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
