import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

class containers extends React.Component {
    render() {
        let isLogin = window.localStorage.getItem("y_userName");
        return isLogin ? (
            <div className="wrapper">
                <Route path="/" component={Header} />
                <Route path="/" component={Sidebar} />
                <div className="content">
                    <div style={{ minWidth: "900px" }}>{this.props.children}</div>
                </div>
            </div>
        ) : (
            <Redirect replace to="/login" />
        );
    }
}
export default containers;
