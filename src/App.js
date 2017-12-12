import React from "react";
// import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./router/router";

class routerList extends React.Component {
    render() {
        // let isLogin = window.localStorage.getItem("y_userName");
        return (
            // <BrowserRouter>
                <RouterConfig />
            // </BrowserRouter>
        );
    }
}
export default routerList;
