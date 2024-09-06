import Card from "@components/Card";
import { Typography } from "antd";
import { FaSackDollar } from "react-icons/fa6";

export const Dashboard = () => {
	return (
		<>
		<div className="grid grid-cols-4 gap-4 mb-4">
		<Card item={{}} icon={<FaSackDollar/>}></Card>
        <Card item={{}} icon={<FaSackDollar/>}></Card>
        <Card item={{}} icon={<FaSackDollar/>}></Card>
        <Card item={{}} icon={<FaSackDollar/>}></Card>
		</div>

		<div className="grid grid-cols-2 gap-4">
				
			<div className="radius-container">
				<Typography.Title level={3}>Memo</Typography.Title>
			</div>
			<div className="radius-container">	<Typography.Title level={3}>Staff List</Typography.Title></div>
			<div className="radius-container">	<Typography.Title level={3}>Payment Vauchers</Typography.Title></div>
			<div className="radius-container"> 	<Typography.Title level={3}>Staff Aplications Card</Typography.Title></div>
		</div>
		</>
	);
};
