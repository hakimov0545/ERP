import { Avatar, Flex, Typography,Card as AntdCard } from "antd"
import { Title } from "./Title"
function Card({item,index,icon}:{item:any,index:number,icon:React.ReactNode}) {
  return (
          <AntdCard key={index} bordered={false}>
              <Flex justify="space-between">
                <div>
                  <Title level={3}>{item.price.toLocaleString("en-US")}</Title>
                  <Typography.Text>{item.desc}</Typography.Text>
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
                  icon={icon}
                />
              </Flex>
            </AntdCard>
  )
}

export default Card
