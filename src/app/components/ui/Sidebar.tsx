"use client";
import { useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

import { sidebarItems } from "@/app/constants/sidebarItems";
import { USER_ROLE } from "@/app/constants/role";
// Import ends

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.ADMIN;

  return (
    <div>
      <Sider
        style={{ minHeight: "100vh" }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            marginBottom: "1rem",
          }}
          className="demo-logo-vertical"
        >
          PH-UMS
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
