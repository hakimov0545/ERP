import { Table, Typography } from "antd";
import { FaSackDollar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { TableCols } from "@data/OfficeData";
import { ICardData } from "@Interface/Interface";
import ActionBar from "@components/ActionBar";
import Card from "@components/Card";

const cardData: ICardData[] = [
  { price: "230000", desc: "asdasd", iconColor: "blue" },
  { price: "230000", desc: "Amount used, YTD", iconColor: "orange" },
  { price: "230000", desc: "Total budget balance", iconColor: "purple" },
  { price: "48%", desc: "Budget % used", iconColor: "green" },
];

function OfficeBudget() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-4" >
        {cardData.map((item, index) => (
        <Card item={item} index={index} icon={<FaSackDollar/>}></Card>
        ))}
      </div>
       <ActionBar title="Create a Budget" buttonFunction={() => navigate("create-budget")} buttonTitle="Create Budget"></ActionBar>
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "white",
          padding: "20px",
          paddingBottom: "40px",
        }}
      >
        <Typography.Title level={3}>Budget History</Typography.Title>
        <Table columns={TableCols} />
      </div>
    </>
  );
}
export default OfficeBudget;
