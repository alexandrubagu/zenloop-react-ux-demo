import React from "react";
import { Menu, Layout } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const items = [
  {
    key: "collect",
    icon: React.createElement(UserOutlined),
    label: "Collect",
    children: [
      {
        key: "data-sources",
        label: "Data Sources",
      },
    ],
  },
  {
    key: "focus",
    icon: React.createElement(LaptopOutlined),
    label: "Focus",
    children: [
      {
        key: "data",
        label: "Data",
      },
      {
        key: "topics",
        label: "Topics",
      },
      {
        key: "keywords",
        label: "Keywords",
      },
    ],
  },
  {
    key: "interact",
    icon: React.createElement(NotificationOutlined),
    label: "Interact",
    children: [
      {
        key: "forward",
        label: "Forward",
        children: [
          {
            key: "email",
            label: "Email",
          },
          {
            key: "webhook",
            label: "Webhook",
          },
          {
            key: "api",
            label: "API",
          },
        ],
      },
      {
        key: "integrations",
        label: "Integrations",
        children: [
          {
            key: "slack",
            label: "Slack",
          },
          {
            key: "Zapier",
            label: "Zapier",
          },
        ],
      },
    ],
  },
  {
    key: "innovate",
    icon: React.createElement(NotificationOutlined),
    label: "Innovate",
    children: [
      {
        key: "dashboard",
        label: "Dashboard",
      },
      {
        key: "reports",
        label: "Reports",
      },
      {
        key: "notifications",
        label: "Notifications",
      },
      {
        key: "live-feeds",
        label: "Live Feeds",
      },
    ],
  },
  {
    key: "delight",
    icon: React.createElement(NotificationOutlined),
    label: "Delight",
    children: [
      {
        key: "customers",
        label: "Customers",
      },
      {
        key: "teams",
        label: "Teams",
      },
    ],
  },
];

const MainMenu = () => {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["menu2"]}
        defaultOpenKeys={["menu2"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default MainMenu;
