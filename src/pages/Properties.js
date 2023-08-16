import {
  Breadcrumb,
  Layout,
  Menu,
  Col,
  Row,
  Table,
  Space,
  Popconfirm,
  Card,
  Button,
} from "antd";

import {
  PlusOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import properties from "../seeds/properties";

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

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, { name, key }) => (
      <Button size={"small"} type="link" href={`/properties/${key}`}>
        {name}
      </Button>
    ),
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button size={"small"}>Edit</Button>
        <Popconfirm title="Delete user?" okText="Yes" cancelText="No">
          <Button size={"small"} danger>
            Delete
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];

const Properties = () => {
  return (
    <Layout style={{ padding: "0 24px 0px" }}>
      <Row gutter={[16, 16]}>
        <Col>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Administration</Breadcrumb.Item>
            <Breadcrumb.Item>Properties</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col
          flex="auto"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button type="primary" shape="circle" icon={<PlusOutlined />} />
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
              title="Properties"
              bordered={false}
              style={{
                marginBottom: "20px",
              }}
            >
              <Table size={"small"} columns={columns} dataSource={properties} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Properties;
