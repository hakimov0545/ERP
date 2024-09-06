import { useNavigate } from "react-router-dom";
import {
	Button,
	DatePicker,
	Form,
	Input,
	Select,
	Table,
	Typography,
} from "antd";
import styled from "@emotion/styled";
import { FaAngleLeft } from "react-icons/fa6";
import { TableCols } from "@data/OfficeData";
import { useForm } from "antd/es/form/Form";
const CustomLink = styled.a`
	color: #0000ff;
	font-size: 22px;
	display: flex;
	align-items: center;
	text-decoration: none;
	gap: 10px;
	margin-bottom: 16px;
`;

const { Title, Text } = Typography;

function OfficeBudgetForm() {
	const navigate = useNavigate();
	const [form] = useForm();
	function onFinish() {
		try {
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<>
			<CustomLink onClick={() => navigate(-1)}>
				<span>
					<FaAngleLeft />
				</span>
				Back
			</CustomLink>
			<div
				style={{
					borderRadius: "20px",
					backgroundColor: "white",
					padding: "20px",
					marginBottom: "16px",
				}}
			>
				<Title level={3}>Create Budget</Title>
				<Text>
					Kindly fill in the form below to create a budget
				</Text>
				<Form
					form={form}
					onFinish={onFinish}
					layout="vertical"
					className="grid grid-cols-3 gap-3 mt-3"
				>
					<Form.Item
						rules={[
							{
								required: true,
								message: "Please input!",
							},
						]}
						name="number"
						label="Budget number"
					>
						<Input
							size="large"
							placeholder="Enter item"
						></Input>
					</Form.Item>

					<Form.Item
						rules={[
							{
								required: true,
								message: "Please input!",
							},
						]}
						name="description"
						label="Budget description"
					>
						<Input
							size="large"
							placeholder="Enter description"
						></Input>
					</Form.Item>

					<Form.Item
						name="amaount"
						rules={[
							{
								required: true,
								message: "Please input!",
							},
						]}
						label="Budget amount"
					>
						<Input
							size="large"
							placeholder="Enter amount in $"
						></Input>
					</Form.Item>

					<Form.Item
						name="date"
						label="DatePicker"
						rules={[
							{
								required: true,
								message: "Please input!",
							},
						]}
					>
						<DatePicker
							size="large"
							style={{ width: "100%" }}
						/>
					</Form.Item>

					<Form.Item
						rules={[
							{
								required: true,
								message: "Please input!",
							},
						]}
						name={"recivingOptions"}
						label="Reciving options"
					>
						<Select
							placeholder="Select option"
							size="large"
						/>
					</Form.Item>

					<div />

					<Button
						size="large"
						onClick={() => form.submit()}
						style={{ width: "100%" }}
						type="primary"
					>
						Create Budget
					</Button>
				</Form>
			</div>
			<div
				style={{
					borderRadius: "20px",
					backgroundColor: "white",
					padding: "20px",
				}}
			>
				<Title level={3}>Budget Request</Title>
				<Table
					columns={TableCols?.filter(
						(item) =>
							item.key !== "varianceAmount" &&
							item.key !== "actualAmount"
					)}
					locale={{ emptyText: null }}
				></Table>
			</div>
		</>
	);
}

export default OfficeBudgetForm;
