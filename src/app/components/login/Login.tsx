"use client";
import { Row, Col, Button } from "antd";

import loginImage from "../../../assets/images/login.svg";
import Image from "next/image";

import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";

// Types
type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
      router.push("/profile");
    } catch (error) {}
  };
  return (
    //TODO: fix gap
    <Row
      justify="space-around"
      align="middle"
      style={{ minHeight: "100vh", margin: "0 16px" }}
    >
      <Col sm={12} md={16} lg={14}>
        <Image src={loginImage} alt="loginImage" width={500} />
      </Col>
      <Col sm={12} md={8} lg={10}>
        <h1
          style={{
            color: "blue",
            margin: "0.5rem 0",
          }}
        >
          Login Your Account To Start
        </h1>
        <Form submitHandler={onSubmit}>
          <div>
            <FormInput name="id" type="text" size="large" label="User Id" />
          </div>
          <div
            style={{
              margin: "0.5rem 0",
            }}
          >
            <FormInput
              name="password"
              type="password"
              size="large"
              label="Password"
            />
          </div>

          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
