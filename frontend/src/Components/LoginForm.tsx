import React from 'react';
import '../styles/LoginForm.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const LoginForm = () => {
    return (
        <div className="login-form-container">
            
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
        </div>
    );
};

export default LoginForm;