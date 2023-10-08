"use client";
import { Row, Col, Button } from "antd";
import loginImage from "../../assets/images/login.svg";
import Image from "next/image";
import Form from "../components/forms/Form";
import FormInput from "../components/forms/FormInput";
import { SubmitHandler } from "react-hook-form";

// Types
type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <Row>
      <Col sm={12} md={16} lg={16}>
        <Image src={loginImage} alt="loginImage" width={500} />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1>First Login Your Account</h1>
        <Form submitHandler={onSubmit}>
          <div>
            <FormInput name="id" type="text" size="large" label="Username" />
          </div>
          <div>
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

export default Login;
