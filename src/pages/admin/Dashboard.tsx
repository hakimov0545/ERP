/** @jsxImportSource @emotion/react */
import { Flex, Space, Typography } from "antd";
import styled from "@emotion/styled";

const { Title, Text } = Typography;

const CustomTitle = styled(Title)`
  margin: 0;
`;

export const Dashboard = () => {
  return (
    <>
      <Flex justify="space-between" align="flex-start">
        <Space direction="vertical">
          <CustomTitle level={5}>Welcome</CustomTitle>
          <Text type="secondary">Tofay sdasda</Text>
        </Space>
        <Text>Tofay sdasda</Text>
      </Flex>
    </>
  );
};
