import { Avatar, Badge, Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://">
        Profile
      </a>
    ),
  },
  {
    key: "2",
    danger: true,
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Logout
      </a>
    ),
  },
];

const UserMenu = () => {
  return (
    <div style={{ marginLeft: "auto" }}>
      <Dropdown menu={{ items }} trigger={["click"]} arrow={true}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Badge count={5}>
              <Avatar
                shape="circle"
                src={
                  <img
                    src={"https://avatars.githubusercontent.com/u/215710?v=4"}
                    alt="avatar"
                  />
                }
              />
            </Badge>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default UserMenu;
