import { Button, Flex } from "antd"
import { Title } from "./Title"

function ActionBar({title,buttonFunction,buttonTitle}:{title:string,buttonFunction:()=>void,buttonTitle:string}) {
  return (
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
    <Title level={3}>{title}</Title>
    <Button
      size="large"
      onClick={buttonFunction}
      type="primary"
    >
    {buttonTitle}
    </Button>
  </Flex>
  )
}

export default ActionBar
