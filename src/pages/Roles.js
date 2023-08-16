import roles from "../seeds/roles";
import utils from "../utils/utils";

import {
  Breadcrumb,
  Layout,
  Menu,
  Col,
  Row,
  Card,
  Table,
  Button,
  Tag,
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

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Survey Group",
    key: "survey_group_id",
    dataIndex: "survey_group_id",
    render: (_, { survey_group_id }) => (
      <Button
        type="link"
        size={"small"}
        href={`/survey-groups/${survey_group_id}`}
      >
        {utils.getSurveyGroup(survey_group_id).name}
      </Button>
    ),
  },
  {
    title: "Count",
    key: "survey_group_id",
    dataIndex: "survey_group_id",
    render: (_, { key }) => <Tag>{utils.countUsersbyRole(key)}</Tag>,
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, { key, name }) => (
      <Button size={"small"} href={`/roles/${key}`}>
        View
      </Button>
    ),
  },
];

const Roles = () => {
  return (
    <Layout style={{ padding: "0 24px 0px" }}>
      <Row gutter={[16, 16]}>
        <Col>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Administration</Breadcrumb.Item>
            <Breadcrumb.Item>Roles</Breadcrumb.Item>
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
          <Button type="primary" icon={<PlusOutlined />}>
            Add Role
          </Button>
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
              title="Roles"
              bordered={false}
              style={{
                marginBottom: "20px",
              }}
            >
              <Table size={"small"} columns={columns} dataSource={roles} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Roles;
