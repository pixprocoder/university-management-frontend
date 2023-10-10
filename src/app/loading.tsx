import { Row, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Spin></Spin>
    </Row>
  );
};

export default Loading;
