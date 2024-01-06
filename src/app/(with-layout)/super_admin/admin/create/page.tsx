"use client";
import Form from "@/app/components/forms/Form";
import FormInput from "@/app/components/forms/FormInput";
import { Col, Row } from "antd";

const CreateAdmin = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };

  return (
    <div>
      <h1>Create Admin</h1>

      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "20px", marginBottom: "10px" }}>
            Admin information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                size="large"
                name="name"
                label="First Name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                size="large"
                name="name"
                label="Middle Name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="text"
                size="large"
                name="name"
                label="Last Name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "10px" }}
            >
              <FormInput
                type="password"
                size="large"
                name="password"
                label="Password"
              />
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default CreateAdmin;
