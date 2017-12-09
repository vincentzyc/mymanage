import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Bundle from "./Bundle";

const Home = props => <Bundle load={() => import("../pages/Home")}>{Home => <Home {...props} />}</Bundle>;
const Roster = props => <Bundle load={() => import("../pages/Roster")}>{Roster => <Roster {...props} />}</Bundle>;
const Todolist = props => <Bundle load={() => import("../pages/todolist/todolist")}>{Todolist => <Todolist {...props} />}</Bundle>;
const Me = props => <Bundle load={() => import("../pages/Me")}>{Me => <Me {...props} />}</Bundle>;
const CheckPhone = props => <Bundle load={() => import("../pages/Check_phone")}>{CheckPhone => <CheckPhone {...props} />}</Bundle>;

class routerList extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/roster" component={Roster} />
                <Route path="/todolist" component={Todolist} />
                <Route path="/me" component={Me} />
                <Route path="/checkphone" component={CheckPhone} />
                <Redirect replace to="/" />
            </Switch>
        );
    }
}
export default routerList;
