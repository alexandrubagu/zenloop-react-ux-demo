import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import { Layout } from "antd";
import HelpButton from "./layout_components/HelpButton";
import MainMenu from "./layout_components/MainMenu";
import UserMenu from "./layout_components/ProfileMenu";
import Logo from "./layout_components/Logo";

import reportWebVitals from "./reportWebVitals";
const { Header, Footer } = Layout;

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <UserMenu />
        </Header>
        <Layout>
          <MainMenu />
          <RouterProvider router={router} />
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Zenloop ©2023 Created by Ant UED
        </Footer>
      </Layout>
      <HelpButton />
    </>

    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
