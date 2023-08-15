import logo from "./logo.svg";
import React from "react";

import { Layout, theme } from "antd";
import HelpButton from "./HelpButton";
import MainMenu from "./MainMenu";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
import PageContent from "./PageContent";
const { Header, Footer, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <UserMenu />
        </Header>
        <Layout>
          <MainMenu />
          <PageContent />
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Zenloop ©2023 Created by Ant UED
        </Footer>
      </Layout>
      <HelpButton />
    </>
  );
}

export default App;
