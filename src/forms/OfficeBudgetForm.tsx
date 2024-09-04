import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Table,
  Typography,
} from "antd";
import styled from "@emotion/styled";
import { FaAngleLeft } from "react-icons/fa6";

const CustomLink = styled.a`
  color: #0000ff;
  font-size: 22px;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  margin-bottom: 16px;
`;

const { Title, Text } = Typography;

function OfficeBudgetForm() {
  const navigate = useNavigate();
  return (
    <>
      <CustomLink onClick={() => navigate(-1)}>
        <span>
          <FaAngleLeft />
        </span>
        Back
      </CustomLink>
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "white",
          padding: "20px",
          marginBottom: "16px",
        }}
      >
        <Title level={3}>Create Budget</Title>
        <Text>Kindly fill in the form below to create a budget</Text>
        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          layout="vertical"
        >
          <Row gutter={20}>
            <Col span={8}>
              <Form.Item label="Budget number">
                <Input size="large" placeholder="Enter item"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Budget description">
                <Input size="large" placeholder="Enter description"></Input>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Budget amount">
                <Input size="large" placeholder="Enter amount in $"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={8}>
              <Form.Item
                label="DatePicker"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <DatePicker size="large" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Reciving options">
                <Select placeholder="Select option" size="large" />
              </Form.Item>
            </Col>
            <Col span={8}></Col>
            <Col span={8}>
              <Button size="large" style={{ width: "100%" }} type="primary">
                Create Budget
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <Title level={3}>Budget Request</Title>
        <Table locale={{ emptyText: null }}></Table>
      </div>
    </>
  );
}

export default OfficeBudgetForm;
