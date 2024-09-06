import ActionBar from "@components/ActionBar";
import Card from "@components/Card";
import { ICardData } from "@Interface/Interface";
import { Typography , Calendar, theme, Button } from "antd";
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const cardData: ICardData[] = [
  { price: "230000", desc: "asdasd", iconColor: "blue" },
  { price: "230000", desc: "Amount used, YTD", iconColor: "orange" },
  { price: "230000", desc: "Total budget balance", iconColor: "purple" },
  { price: "48%", desc: "Budget % used", iconColor: "green" },
];

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

function Maintenance() {
  const navigate=useNavigate()
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return <><div className="grid grid-cols-4 gap-4 mb-4">
    {cardData.map((item,index)=>(
      <Card item={item} key={index} icon={<IoSettingsOutline/>}></Card>
    ))}
    </div>
   <ActionBar title="Schedule a Maintenance" buttonTitle="Schedule Maintenance" buttonFunction={()=>{navigate("schedule-maintenance")}}></ActionBar>
   <div className="radius-container">
        <Typography.Title level={3}>Schedule Maintenance</Typography.Title>
        <div className="flex justify-around">
        <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
    <div className="flex flex-col justify-evenly">
	    
      {   [1,2].map((item)=>(
        <div>
          <Typography.Text>18th November, 2022</Typography.Text>
          <Typography.Text className="block mb-2 font-bold">{item}. Scheduled maintenance for service of 3 unit of AC</Typography.Text>
	        <Button  size="large" type="primary">View</Button>
        </div>
  ))}
   
    
   
    </div>
   
        </div>
      </div>
    </>;
}

export default Maintenance;
