import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";

// const back = () => {
//     window.history.back();
// };

class Header extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {}
    render() {
        const { goBack } = this.props.history;
        return (
            <header className="header_fixed">
                <NavBar
                    icon={this.props.location.pathname==='/'? '':<Icon type="left" />}
                    onLeftClick={goBack}
                >
                    Vincent
                </NavBar>
                {/* <img src={require("../common/img/back.png")} alt="back" className="backicon" onClick={back} style={this.props.location.pathname==='/'?{display:'none'}:{}}/>
                <h3 className="cfff">Vincent</h3> */}
            </header>
        );
    }
}

export default Header;
