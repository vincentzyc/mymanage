import React from "react";
import { getUserInfo, getList } from "../redux/actions/actions";
import { connect } from "react-redux";
import api from "../common/api";

class ListExample extends React.Component {
    constructor(props) {
        super(props);
        this.props.getlist();
    }
    render() {
        if (this.props.NoInfo.list) {
            return (
                <div>
                    <h1>我的</h1>
                    <ul>
                        {this.props.NoInfo.list.map((item, i) => (
                            <li key={i} className="mg20">
                                {item.widgetName}
                            </li>
                        ))}
                    </ul>
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

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo,
        getlist: () => {
            api.jqPost("supermarketloan/getlist", "", res => {
                return dispatch(getList(res));
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListExample);
