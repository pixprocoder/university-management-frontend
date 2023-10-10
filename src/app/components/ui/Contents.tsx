"use client";
import React from "react";
import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "super_admin";

  return (
    <Content style={{ minHeight: "100vh", padding: "10px", color: "black" }}>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `student`,
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
