import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Bundle from "./Bundle";
import { spring, AnimatedSwitch } from "react-router-transition";
import Containers from "../components/Containers";

const Login = props => createComponent(props, () => import("../components/Login"));
const Home = props => createComponent(props, () => import("../pages/Home"));
const Roster = props => createComponent(props, () => import("../pages/Roster"));
const Todolist = props => createComponent(props, () => import("../pages/todolist/todolist"));
const Me = props => createComponent(props, () => import("../pages/Me"));
const CheckPhone = props => createComponent(props, () => import("../pages/Check_phone"));
const UserInfo = props => createComponent(props, () => import("../pages/UserInfo"));
const Order = props => createComponent(props, () => import("../pages/Order"));

const createComponent = (props, component) => <Bundle load={component}>{C => <C {...props} />}</Bundle>;

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 666, // 20-3000 越大动画时间较短
        damping: 66 //22
    });
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.7)
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1)
    }
};
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
                                <AnimatedSwitch
                                    atEnter={bounceTransition.atEnter}
                                    atLeave={bounceTransition.atLeave}
                                    atActive={bounceTransition.atActive}
                                    mapStyles={mapStyles}
                                    className="switch-wrapper"
                                >
                                    <Route exact path="/" component={Home} />
                                    <Route path="/roster" component={Roster} />
                                    <Route path="/todolist" component={Todolist} />
                                    <Route path="/me" component={Me} />
                                    <Route path="/checkphone" component={CheckPhone} />
                                    <Route path="/userinfo" component={UserInfo} />
                                    <Route path="/order" component={Order} />
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
