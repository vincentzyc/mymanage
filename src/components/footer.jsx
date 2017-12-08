import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const active = {
    background: "#db403f",
    color:'#fff'
};
class Footer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {}

    render() {
        return (
            <footer className="bottom_fixed">
                <nav className="flex text-center">
                    <NavLink className="flex-auto" to="/" exact activeStyle={active}>
                        Home
                    </NavLink>
                    <NavLink className="flex-auto" to="/roster" activeStyle={active}>
                        Roster
                    </NavLink>
                    <NavLink className="flex-auto" to="/todolist" activeStyle={active}>
                        Todolist
                    </NavLink>
                    <NavLink className="flex-auto" to="/me" activeStyle={active}>
                        Me
                    </NavLink>
                </nav>
            </footer>
        );
    }
}

export default Footer;
