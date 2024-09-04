import classNames from "classnames";
import {
  Avatar,
  Button,
  Card,
  Col,
  Flex,
  Row,
  Table,
  TableProps,
  Typography,
} from "antd";
import styled from "@emotion/styled";
import { FaSackDollar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const { Text, Title: AntdTitle } = Typography;

const Title = styled(AntdTitle)`
  margin: 0px !important;
`;

interface ICardData {
  price: string | number;
  desc: string;
  iconColor: string;
}
const cardData: ICardData[] = [
  { price: "230000", desc: "asdasd", iconColor: "blue" },
  { price: "230000", desc: "Amount used, YTD", iconColor: "orange" },
  { price: "230000", desc: "Total budget balance", iconColor: "purple" },
  { price: "48%", desc: "Budget % used", iconColor: "green" },
];

const columns: TableProps["columns"] = [
  {
    title: "S/N",
    dataIndex: "index",
    key: "index",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "No.",
    dataIndex: "No",
    key: "No",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: " Amount ($)",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Actual Amount ($)",
    dataIndex: "actualAmount",
    key: "actualAmount",
  },
  {
    title: "Variance ($)",
    dataIndex: "varianceAmount",
    key: "varianceAmount",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

function OfficeBudget() {
  const navigate = useNavigate();
  return (
    <>
      <Row gutter={16} style={{ marginBottom: "16px" }}>
        {cardData.map((item, index) => (
          <Col span={6} key={index}>
            <Card bordered={false}>
              <Flex justify="space-between">
                <div>
                  <Title level={3}>{item.price.toLocaleString("en-US")}</Title>
                  <Text>{item.desc}</Text>
                </div>
                <Avatar
                  className={` ${
                    item.iconColor === "orange"
                      ? "bg-orange-200 text-orange-500"
                      : item.iconColor === "purple"
                      ? "bg-purple-200 text-purple-500 "
                      : item.iconColor === "green"
                      ? "bg-green-200 text-green-500"
                      : item.iconColor === "blue"
                      ? "bg-blue-200 text-blue-500"
                      : ""
                  }  `}
                  size={50}
                  icon={
                    <FaSackDollar
                      className={classNames(`text-${item.iconColor}`)}
                    />
                  }
                />
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
      <Flex
        justify="space-between"
        align="center"
        style={{
          marginBottom: "16px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <Title level={3}>Create a Budget</Title>
        <Button
          size="large"
          onClick={() => navigate("create-budget")}
          type="primary"
        >
          Create Budget
        </Button>
      </Flex>
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "white",
          padding: "20px",
          paddingBottom: "40px",
        }}
      >
        <AntdTitle level={3}>Budget History</AntdTitle>
        <Table columns={columns} />
      </div>
    </>
  );
}
export default OfficeBudget;
