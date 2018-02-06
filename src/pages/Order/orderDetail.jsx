import React, { Component } from "react";
import { connect } from "react-redux";

class Detail extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>
                        所选记录详细内容
                        <button className="pull-right" onClick={() => this.props.changeState(false)}>返回</button>
                    </h1>
                </header>
                <h2>{JSON.stringify(this.props.ApplyDetail)}</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ApplyDetail: state.ApplyDetail
    };
};

export default connect(state => mapStateToProps)(Detail);
