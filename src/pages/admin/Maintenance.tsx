import ActionBar from "@components/ActionBar";
import Card from "@components/Card";
import { ICardData } from "@Interface/Interface";
import { FaSackDollar } from "react-icons/fa6";
const cardData: ICardData[] = [
  { price: "230000", desc: "asdasd", iconColor: "blue" },
  { price: "230000", desc: "Amount used, YTD", iconColor: "orange" },
  { price: "230000", desc: "Total budget balance", iconColor: "purple" },
  { price: "48%", desc: "Budget % used", iconColor: "green" },
];
function Maintenance() {
  return <><div className="grid grid-cols-4 gap-4 mb-4">
    {cardData.map((item,index)=>(
      <Card item={item} index={index} icon={<FaSackDollar/>}></Card>
    ))}
    </div>
   <ActionBar title="Schedule a Maintenance" buttonTitle="Schedule Maintenance" buttonFunction={()=>{}}></ActionBar>
    </>;
}

export default Maintenance;
