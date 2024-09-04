/** @jsxImportSource @emotion/react */
import { FaSackDollar } from "react-icons/fa6";
import { Flex, Typography } from "antd";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
const { Text, Title: AntdTitle } = Typography;
const Title = styled(AntdTitle)`
  margin: 0px !important;
`;

function OfficeBudget() {
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        style={{
          marginBottom: "16px",
        }}
      >
        <div>
          <Title
            level={3}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <FaSackDollar className="text-blue-500" /> Office Budget
          </Title>
          <Text>View, create and send budget request.</Text>
        </div>
        <Text type="secondary">Time: 14:30</Text>
      </Flex>
      <Outlet></Outlet>
    </>
  );
}

export default OfficeBudget;
