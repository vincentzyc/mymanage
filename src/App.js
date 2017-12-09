import React from "react";
import { BrowserRouter, Switch, Route, Redirect  } from "react-router-dom";
import RouterConfig from "./router/router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

class routerList extends React.Component {
    render() {
        let isLogin = window.localStorage.getItem("y_userName");
        return (
            <BrowserRouter>
                {isLogin ? (
                    <div className="wrapper">
                        <Route path="/" component={Header} />
                        <Route path="/" component={Sidebar} />
                        <div className="content">
                            <div style={{ minWidth: "900px" }}>
                                <RouterConfig />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="wrapper">
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Redirect replace to="/login" />
                        </Switch>
                    </div>
                )}
            </BrowserRouter>
        );
    }
}
export default routerList;
