import React from 'react';
import '../styles/LoginForm.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <span className="title">
                <h2>Login</h2>
                <p className="sub">Please fill in the fields to continue.</p>
            </span>
            <Form action="post" className="login-form">
                <Form.Item name="email" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true }]}>
                    <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />} />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox id='rememberMe'>Remember me</Checkbox>
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Log In
                    </Button>
                </Form.Item>
            </Form>
            <span className="footer">
                <a href='#' className='sub'>Create account</a> | <a href='#' className='sub'>Forgot password</a>
            </span>
        </div>
    );
};

export default LoginForm;