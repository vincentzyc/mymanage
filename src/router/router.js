import React from "react";
import { Route, Switch } from "react-router-dom";
import Bundle from "./Bundle";

const Home = (props) => (
    <Bundle load={() => import('../components/main/home')}>{(Home) => <Home {...props}/>}</Bundle>
);
const Roster = (props) => (
    <Bundle load={() => import('../components/main/roster')}>{(Roster) => <Roster {...props}/>}</Bundle>
);
const Todolist = (props) => (
    <Bundle load={() => import('../components/main/todolist/todolist')}>{(Todolist) => <Todolist {...props}/>}</Bundle>
);
const Me = (props) => (
    <Bundle load={() => import('../components/main/me')}>{(Me) => <Me {...props}/>}</Bundle>
);
const CheckPhone = (props) => (
    <Bundle load={() => import('../components/check_phone')}>{(CheckPhone) => <CheckPhone {...props}/>}</Bundle>
);
class routerList extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/roster" component={Roster} />
                    <Route path="/todolist" component={Todolist} />
                    <Route path="/me" component={Me} />
                    <Route path="/checkphone" component={CheckPhone} />
                </Switch>
            </div>
        );
    }
}
export default routerList;