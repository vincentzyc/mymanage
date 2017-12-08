import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "antd-mobile";
// import api from "../../common/api";

const Item = List.Item;
const Brief = Item.Brief;

class ListExample extends Component {
    state = {};

    render() {
        return (
            <div>
                <List renderHeader={() => "Subtitle"} className="my-list">
                    <Item arrow="horizontal" multipleLine onClick={() => {}}>
                        Title <Brief>subtitle</Brief>
                    </Item>
                    <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android">
                        ListItem （Android）<Brief>
                            There may have water ripple effect of <br /> material if you set the click event.
                        </Brief>
                    </Item>
                    <Link to="/checkphone">
                        <Item arrow="horizontal" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine onClick={() => {}}>
                            Title <Brief>subtitle</Brief>
                        </Item>
                    </Link>
                </List>
            </div>
        );
    }
}
export default ListExample;
