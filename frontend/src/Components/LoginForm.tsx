import React from 'react';
import { Form, Input, Button, Typography, Flex, Divider, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const SignInForm: React.FC = () => {
  const onFinish = (values: { email: string; password: string }) => {
    console.log('Received values:', values);
    // Здесь можно добавить логику авторизации
  };

  return (
    <Card style={{ width: 400, margin: '0 auto', padding: '16px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 8, fontFamily: 'Unbounded' }}>
            Sign In
        </Title>
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
            Please fill in the fields to continue.
        </Text>

        <Form
            name="signin"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
        >
            <Form.Item
            label="Email"
            name="email"
            rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
            ]}
            >
            <Input size="large" prefix={<UserOutlined />} placeholder="your@email.com" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
            >
            <Input.Password size="large" prefix={<LockOutlined />} placeholder="••••••••" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                    Sign In
                </Button>
            </Form.Item>
        </Form>

        <Divider />

        <Flex justify="space-between" align="center">
            <Typography.Link href="/signup">Create account</Typography.Link>
            <Typography.Link href="/forgot-password">Forgot password?</Typography.Link>
        </Flex>
    </Card>
  );
};

export default SignInForm;