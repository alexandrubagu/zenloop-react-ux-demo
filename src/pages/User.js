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
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
];

const Users = () => {
  let { userId } = useParams();
  const user = utils.getUser(userId);
  const properties = utils.getUserProperties(user.property_ids);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: user.name,
      email: user.email,
    });
  }, []);

  return (
    <Layout style={{ padding: "0 24px 0px" }}>
      <Row gutter={[16, 16]}>
        <Col>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Administration</Breadcrumb.Item>
            <Breadcrumb.Item>Users</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Content style={{ marginBottom: 0, minHeight: 1500 }}>
        <Row gutter={[16, 16]}>
          <Col flex="200px">
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["1"]}
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              items={menuItems}
            />
          </Col>
          <Col flex="auto">
            <Card
              title="User"
              bordered={false}
              style={{
                marginBottom: "20px",
              }}
              extra={
                <Button danger icon={<PlusOutlined />}>
                  Save
                </Button>
              }
            >
              <Form
                {...layout}
                form={form}
                name="control-hooks"
                style={{ maxWidth: 600 }}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Form>
            </Card>

            <Card
              title="Assigned Roles"
              bordered={false}
              style={{
                marginBottom: "20px",
              }}
              extra={
                <Button danger icon={<PlusOutlined />}>
                  Assign Role
                </Button>
              }
            >
              <p>{user.name}</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>

            <Card
              title="Assigned Properties"
              bordered={false}
              style={{
                marginBottom: "20px",
              }}
              extra={
                <Button danger icon={<PlusOutlined />}>
                  Assign Property
                </Button>
              }
            >
              <Table columns={columns} dataSource={properties} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Users;
