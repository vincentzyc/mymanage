import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import RouterConfig from "./router/router";
import "./common/base.css";

if (process.env.NODE_ENV === "development") {
    require("./mock/mock");
}

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>,
    document.getElementById("root")
);
