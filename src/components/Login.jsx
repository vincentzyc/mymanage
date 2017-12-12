import React from "react";
import { Form, Icon, Input, Button } from "antd";
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                window.localStorage.setItem("y_userName", values.userName);
                this.props.history.replace('/');
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="wrapper">
                <Form onSubmit={this.handleSubmit} className="login-form loginForm">
                    <FormItem>
                        {getFieldDecorator("userName", {
                            rules: [{ required: true, message: "Please input your username!" }]
                        })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />)}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator("password", {
                            rules: [{ required: true, message: "Please input your Password!" }]
                        })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />)}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
