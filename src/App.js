import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import RouterConfig from "./router/router";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="pd50">
                    <Route path="/" component={Header} />
                    <RouterConfig />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;