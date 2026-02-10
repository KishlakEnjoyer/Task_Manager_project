import React from "react";
import "../styles/ProjectView.css";
import {
  SettingOutlined,
  LogoutOutlined,
  FolderAddOutlined,
  PlusOutlined,
  UserOutlined,
  MenuOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import {
  Layout,
  Menu,
  Typography,
  Divider,
  Space,
  Button,
  Input,
  Flex,
  Tooltip,
  Card,
  Avatar,
  Tabs,
  Dropdown,
} from "antd";

import type { MenuProps, GetProps, TabsProps, DropdownProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;
type MenuItem = Required<MenuProps>["items"][number];

const { Title, Text } = Typography;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const tabsItems: TabsProps["items"] = [
  {
    key: "1",
    label: "z-1512431",
    children: (
      <Card title="Stage description">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, architecto cumque quas eligendi aliquid in expedita,
          amet porro obcaecati unde, distinctio quae itaque culpa asperiores
          tempore quibusdam repellat enim ullam?
        </Text>
      </Card>
    ),
  },
  {
    key: "2",
    label: "z-151211",
    children: (
      <Card title="Stage description">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, architecto cumque quas eligendi aliquid in expedita,
          amet porro obcaecati unde, distinctio quae itaque culpa asperiores
          tempore quibusdam repellat enim ullam? 123 123 1 12321 12312 312{" "}
        </Text>
      </Card>
    ),
  },
  {
    key: "3",
    label: "z-153",
    children: (
      <Card title="Stage description">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, architecto cumque quas eligendi aliquid in expedita,
          amet porro obcaecati unde, distinctio quae itaque culpa asperiores
          tempore quibusdam repellat enim ullam? 123 123
        </Text>
      </Card>
    ),
  },
];

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: "Начало",
    children: tabsItems[0]?.children,
  },
  {
    key: "2",
    label: "Делаем структуру",
    children: tabsItems[1]?.children,
  },
  {
    key: "3",
    label: "Анализ рынка",
    children: tabsItems[2]?.children,
  },
];

const items: MenuItem[] = [
  {
    key: "sub2",
    label: "Project Name 2",
    children: [
      { key: "5", label: "Stage 1" },
      { key: "6", label: "Stage 2" },
      { key: "7", label: "Stage 3" },
      { key: "8", label: "Stage 4" },
    ],
  },
];

const itemsProject: MenuProps["items"] = [
    {
      key: "1",
      label: "Edit project",
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Delete",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

const App: React.FC = () => {
  
  const sharedProps: DropdownProps = {
    menu: { items: itemsProject },
    placement: "bottomLeft",
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme="light"
        style={{ borderRight: "1px solid rgba(253,253,253,0.12)" }}
      >
        <Flex gap="middle" vertical style={{ padding: "24px 24px 0 24px" }}>
          <div className="logo">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="42" height="42" rx="21" fill="white" />
              <path
                d="M27.5 27.5652C27.5 28.8438 27.2284 29.9592 26.6853 30.9112C26.1538 31.8725 25.4027 32.6192 24.432 33.1512C23.4613 33.6832 22.3173 33.9492 21 33.9492C19.6942 33.9492 18.5502 33.6832 17.568 33.1512C16.5973 32.6192 15.8404 31.8725 15.2973 30.9112C14.7658 29.9592 14.5 28.8438 14.5 27.5652L14.5 21.9932L27.5 21.9932L27.5 27.5652ZM16.4933 25.5772L18.4867 23.9532L18.4867 27.8452C18.4867 28.3585 18.5849 28.7972 18.7813 29.1612C18.9893 29.5345 19.2782 29.8192 19.648 30.0152C20.0293 30.2112 20.48 30.3092 21 30.3092C21.5316 30.3092 21.9822 30.2112 22.352 30.0152C22.7218 29.8192 23.0049 29.5345 23.2013 29.1612C23.4093 28.7972 23.5133 28.3585 23.5133 27.8452L23.5133 23.9532L25.5067 25.5772L16.4933 25.5772Z"
                fill="black"
              />
              <path
                d="M19.8733 16.0309L22.6293 16.0309L14.5 21.3509L14.5 16.9129L19.648 13.7769L19.648 15.5969L14.5 12.4329L14.5 8.0509L22.6293 13.4129L19.8733 13.4129L27.5 8.3169L27.5 12.8389L22.872 15.6669L22.872 13.8469L27.5 16.6189L27.5 21.0849L19.8733 16.0309Z"
                fill="black"
              />
            </svg>
            <h4 className="logo-title">XDGroup</h4>
          </div>

          <Flex gap="middle">
            <Search placeholder="Search..." onSearch={onSearch} />

            <Tooltip title="Add">
              <Button shape="circle" icon={<PlusOutlined />} />
            </Tooltip>
          </Flex>
        </Flex>

        <Divider />

        <Menu
          mode="inline"
          items={items}
          style={{ background: "transparent", borderRight: 0 }}
          className="transparent-menu-popup"
        />

        <div style={{ marginTop: "auto" }}>
          <Divider />

          <Space vertical style={{ padding: "0 16px", width: "100%" }}>
            <Button
              block
              icon={<Avatar icon={<UserOutlined />} />}
              type="text"
              size="large"
              style={{ textAlign: "left", justifyContent: "flex-start" }}
            >
              Bulat030903
            </Button>
          </Space>

          <Divider />

          <Space
            vertical
            style={{ padding: "0 16px 16px 16px", width: "100%" }}
          >
            <Button
              block
              icon={<SettingOutlined />}
              type="text"
              size="large"
              style={{ textAlign: "left", justifyContent: "flex-start" }}
            >
              Settings
            </Button>

            <Button
              block
              icon={<LogoutOutlined />}
              type="text"
              size="large"
              danger
              style={{ textAlign: "left", justifyContent: "flex-start" }}
            >
              Exit
            </Button>
          </Space>
        </div>
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "24px 24px 0 24px",
            background: "transparent",
            display: "flex",
            justifyContent: "space-between",
            height: "fit-content",
          }}
        >
          <Title level={2} style={{ margin: 0, fontFamily: "Unbounded" }}>
            Проект 1
          </Title>

          <Dropdown {...sharedProps} trigger={['click']}>
            <Button icon={<MenuOutlined />} />
          </Dropdown>
        </Header>

        <Content style={{ padding: "0 24px" }}>
          <Tabs defaultActiveKey="1" items={tabs} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
