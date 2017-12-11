import React from "react";
import { getUserInfo, getFail } from "../redux/actions/actions";
import { connect } from "react-redux";

class ListExample extends React.Component {
    constructor(props) {
        super(props);
        this.props.getFail();
    }
    render() {
        if (this.props.NoInfo.list) {
            return (
                <div>
                    <h1>我的</h1>
                    <ul>{this.props.NoInfo.list.map((item,i) => <li key={i} className="mg20">{item.widgetName}</li>)}</ul>
                </div>
            );
        }
        return null;
    }
}
const mapStateToProps = state => {
    return {
        UserInfo: state.UserInfo || null,
        NoInfo: state.NoInfo
    };
};

const mapDispatchToProps = {
    getUserInfo,
    getFail
};

export default connect(mapStateToProps, mapDispatchToProps)(ListExample);
