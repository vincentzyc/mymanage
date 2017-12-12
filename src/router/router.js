import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Bundle from "./Bundle";
import { AnimatedSwitch } from "react-router-transition";
import Containers from "../components/Containers";

const Login = props => <Bundle load={() => import("../components/Login")}>{Login => <Login {...props} />}</Bundle>;
const Home = props => <Bundle load={() => import("../pages/Home")}>{Home => <Home {...props} />}</Bundle>;
const Roster = props => <Bundle load={() => import("../pages/Roster")}>{Roster => <Roster {...props} />}</Bundle>;
const Todolist = props => <Bundle load={() => import("../pages/todolist/todolist")}>{Todolist => <Todolist {...props} />}</Bundle>;
const Me = props => <Bundle load={() => import("../pages/Me")}>{Me => <Me {...props} />}</Bundle>;
const CheckPhone = props => <Bundle load={() => import("../pages/Check_phone")}>{CheckPhone => <CheckPhone {...props} />}</Bundle>;
const UserInfo = props => <Bundle load={() => import("../pages/UserInfo")}>{UserInfo => <UserInfo {...props} />}</Bundle>;

class routerList extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route
                        path="/"
                        render={({ history, location }) => (
                            <Containers history={history} location={location}>
                                <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
                                    <Route exact path="/" component={Home} />
                                    <Route path="/roster" component={Roster} />
                                    <Route path="/todolist" component={Todolist} />
                                    <Route path="/me" component={Me} />
                                    <Route path="/checkphone" component={CheckPhone} />
                                    <Route path="/userinfo" component={UserInfo} />
                                    <Redirect replace to="/" />
                                </AnimatedSwitch>
                            </Containers>
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default routerList;
