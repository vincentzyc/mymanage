import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Bundle from "./Bundle";

const Login = props => <Bundle load={() => import("../pages/Login")}>{Login => <Login {...props} />}</Bundle>;
const Header = props => <Bundle load={() => import("../components/Header")}>{Header => <Header {...props} />}</Bundle>;
const Sidebar = props => <Bundle load={() => import("../components/Sidebar")}>{Sidebar => <Sidebar {...props} />}</Bundle>;
const Home = props => <Bundle load={() => import("../pages/Home")}>{Home => <Home {...props} />}</Bundle>;
const Roster = props => <Bundle load={() => import("../pages/Roster")}>{Roster => <Roster {...props} />}</Bundle>;
const Todolist = props => <Bundle load={() => import("../pages/todolist/todolist")}>{Todolist => <Todolist {...props} />}</Bundle>;
const Me = props => <Bundle load={() => import("../pages/Me")}>{Me => <Me {...props} />}</Bundle>;
const CheckPhone = props => <Bundle load={() => import("../pages/Check_phone")}>{CheckPhone => <CheckPhone {...props} />}</Bundle>;

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
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/home" component={Home} />
                                    <Route path="/roster" component={Roster} />
                                    <Route path="/todolist" component={Todolist} />
                                    <Route path="/me" component={Me} />
                                    <Route path="/checkphone" component={CheckPhone} />
                                    <Redirect replace to="/" />
                                </Switch>
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
