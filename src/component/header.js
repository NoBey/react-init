import { Layout, Menu, Affix } from "antd";
import React from "react";

export const Footer = () => (
  <Affix>
    <div>
      <Layout.Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">分类1</Menu.Item>
          <Menu.Item key="3">分类1</Menu.Item>
        </Menu>
      </Layout.Header>
    </div>
  </Affix>
);

export default Footer;
