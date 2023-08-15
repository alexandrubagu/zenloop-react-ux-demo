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
  message,
  Button,
} from "antd";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  PlusOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

const confirm = (e) => {
  console.log(e);
  message.success("Click on Yes");
};
const cancel = (e) => {
  console.log(e);
  message.error("Click on No");
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Users", "1", <PieChartOutlined />),
  getItem("Roles", "2", <PieChartOutlined />),
  getItem("Users Access", "3", <ContainerOutlined />),
  getItem("SurveyGroups", "4", <DesktopOutlined />),
  getItem("Properties", "5", <MailOutlined />),
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
    render: (_, record) => (
      <Space size="middle">
        <Button size={"small"}>Edit</Button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this user?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button size={"small"} danger>
            Delete
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Alex",
    email: "alex@zenloop.com",
    tags: ["account_owner"],
  },
  {
    key: "2",
    name: "Artur",
    email: "artur@zenloop.com",
    tags: ["support"],
  },
  {
    key: "3",
    name: "Alan",
    email: "alan@zenloop.com",
    tags: [],
  },
  {
    key: "4",
    name: "Bartosz",
    email: "bartosz@zenloop.com",
    tags: [],
  },
  {
    key: "5",
    name: "Jakub",
    email: "jakub@zenloop.com",
    tags: [],
  },
];

const PageContent = () => {
  return (
    <Layout style={{ padding: "0 24px 0px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Administration</Breadcrumb.Item>
        <Breadcrumb.Item>Users</Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{ marginBottom: 0, minHeight: 1500 }}>
        <Row gutter={[16, 16]}>
          <Col flex="200px">
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="light"
              inlineCollapsed={false}
              items={items}
            />
          </Col>
          <Col flex="auto">
            <>
              <Button type="primary" shape="circle" icon={<PlusOutlined />} />
              <Table columns={columns} dataSource={data} />
            </>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PageContent;
