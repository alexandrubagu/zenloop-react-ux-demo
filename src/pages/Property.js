import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import utils from "../utils/utils";

import {
  Breadcrumb,
  Layout,
  Menu,
  Col,
  Row,
  Table,
  Tag,
  Space,
  Popconfirm,
  Card,
  Button,
  Form,
  Input,
  Select,
} from "antd";

import {
  PlusOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: (
      <a href="/users" rel="noopener noreferrer">
        Users
      </a>
    ),
  },
  {
    key: "2",
    icon: <ContainerOutlined />,
    label: (
      <a href="/roles" rel="noopener noreferrer">
        Roles
      </a>
    ),
  },
  {
    key: "3",
    icon: <DesktopOutlined />,
    label: (
      <a href="/survey-groups" rel="noopener noreferrer">
        SurveyGroups
      </a>
    ),
  },
  {
    key: "4",
    icon: <MailOutlined />,
    label: (
      <a href="/properties" rel="noopener noreferrer">
        Properties
      </a>
    ),
  },
];

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 16,
  },
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = "grey";
          if (tag === "account_owner") {
            color = "red";
          }

          if (tag === "support") {
            color = "green";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, { key }) => (
      <Space size="middle">
        <Button size={"small"} href={`/users/${key}`}>
          Edit
        </Button>
        <Popconfirm title="Delete user?" okText="Yes" cancelText="No">
          <Button size={"small"} danger>
            Delete
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];

const Property = () => {
  let { propertyId } = useParams();
  const property = utils.getProperty(propertyId);
  const users = utils.getUsersByProperty(property.key);

  return (
    <Layout style={{ padding: "0 24px 0px" }}>
      <Row gutter={[16, 16]}>
        <Col>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Administration</Breadcrumb.Item>
            <Breadcrumb.Item href="/properties">Properties</Breadcrumb.Item>
            <Breadcrumb.Item>{propertyId}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Content style={{ marginBottom: 0, minHeight: 1500 }}>
        <Row gutter={[16, 16]}>
          <Col flex="200px">
            <Menu
              defaultSelectedKeys={["4"]}
              defaultOpenKeys={["4"]}
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              items={menuItems}
            />
          </Col>
          <Col flex="auto">
            <Card
              title="Assigned Users"
              bordered={false}
              style={{
                marginBottom: "20px",
              }}
            >
              <Table size={"small"} columns={columns} dataSource={users} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Property;
