import { Button, Flex } from "antd"
import { Title } from "./Title"

function ActionBar({title,buttonFunction,buttonTitle}:{title:string,buttonFunction:()=>void,buttonTitle:string}) {
  return (
    <Flex
    justify="space-between"
    align="center"
    className="mb-4 radius-container"
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
