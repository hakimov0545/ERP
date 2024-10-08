import React from "react";

import {
	Button,
	Input,
	message,
	Select,
	Space,
	Spin,
	Table,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
	useDeleteStaffMutation,
	useGetStaffQuery,
} from "@api/createApi";

export const Staff: React.FC = () => {
	const navigate = useNavigate();

	const {
		data: staff,
		error,
		isLoading,
	} = useGetStaffQuery(undefined);
	const [deleteStaff] = useDeleteStaffMutation();

	if (isLoading)
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "80%",
				}}
			>
				<Spin size="large" />
			</div>
		);
	if (error)
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "80%",
					color: "red",
					fontSize: "24px",
					fontWeight: "bold",
				}}
			>
				Error fetching staff
			</div>
		);

	const columns = [
		{
			title: "S/N",
			dataIndex: "index",
			key: "index",
		},
		{
			title: "First Name",
			dataIndex: "firstName",
			key: "fName",
		},
		{
			title: "Last Name",
			dataIndex: "lastName",
			key: "lName",
		},
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
			render: (text: string) =>
				text.charAt(0).toUpperCase() +
				text.slice(1).toLowerCase(),
		},
		{
			title: "Phone Number",
			dataIndex: "phoneNumber",
			key: "phoneNumber",
		},
		{
			title: "Role",
			dataIndex: "role",
			key: "role",
		},
		{
			title: "Designation",
			dataIndex: "designation",
			key: "designation",
		},
		{
			title: "Action",
			key: "action",
			render: (_: any, record: any) => (
				<Space size="middle">
					<a
						className="text-blue-400"
						onClick={() =>
							navigate("/admin/staff/edit", {
								state: { id: record.key },
							})
						}
					>
						Edit
					</a>
					<a
						className="text-red-500 hover:text-red-700"
						onClick={() => onDelete(record.key)}
					>
						Delete
					</a>
				</Space>
			),
		},
	];

	const data = staff.map((item: any, index: number) => ({
		index: index + 1,
		key: item.id,
		firstName: item.firstName,
		lastName: item.lastName,
		gender: item.gender,
		phoneNumber: item.phone,
		designation: item.designationId,
		role: item.roleId,
	}));

	const onDelete = async (id: number | string) => {
		await deleteStaff(id);
		message.success("Staff deleted successfully");
	};

	return (
		<div>
			<div className="flex items-center justify-between px-5 py-6 mb-5 radius-container">
				<div style={{ width: "350px" }}>
					<p className="mb-3 text-lg">
						Quick search a staff
					</p>
					<Input
						placeholder="Enter a search word"
						className="h-[50px]"
						style={{ borderRadius: "10px" }}
					/>
				</div>
				<div>
					<p className="text-2xl font-bold">
						{staff.length}
					</p>
					<p className="text-lg">Total number of staff</p>
				</div>
				<div style={{ width: "200px" }}>
					<p className="mb-3 text-lg">Filter staff</p>
					<Select
						defaultValue={"all"}
						style={{
							height: "50px",
							width: "100%",
							borderRadius: "15px",
						}}
					>
						<Select.Option value="all">
							All staff
						</Select.Option>
						<Select.Option value="">
							Other option
						</Select.Option>
					</Select>
				</div>
				<Button
					type="primary"
					style={{
						height: "50px",
						borderRadius: "15px",
						padding: "12px 40px",
					}}
					onClick={() => {
						navigate("/admin/staff/add");
					}}
				>
					Add a new staff
				</Button>
			</div>
			<div
				style={{
					borderRadius: "20px",
					backgroundColor: "white",
					width: "100%",
				}}
				className="px-5 py-6"
			>
				<p className="text-2xl font-bold">All staff</p>
				<Table
					columns={columns}
					rowHoverable={false}
					dataSource={data}
				/>
			</div>
		</div>
	);
};
