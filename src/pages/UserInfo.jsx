import React from "react";
import { getUserInfo } from "../redux/actions/actions";
import { connect } from "react-redux";
import { Button } from 'antd';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleClick();   
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.getUserInfo();
    }
    render() {
        if (this.props.UserInfo) {
            return (
                <div>
                    <p>姓名：{this.props.UserInfo.name}</p>
                    <p>年龄：{this.props.UserInfo.age}</p>
                    <Button type="primary" onClick={this.handleClick}>获取用户信息</Button>
                </div>
            );
        }
        return null;
    }
}

// const mapStateToProps = state => {
//     return {
//         UserInfo: state.UserInfo || null,
//     };
// };

// const mapDispatchToProps = {
//     getUserInfo
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

export default connect(state => ({UserInfo: state.UserInfo}), {getUserInfo})(UserInfo);
