import React, { useEffect } from "react";
import { Layout as AntdLayout, Flex, Menu, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsPeopleFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { RiTruckFill } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { RiStockLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { BsBasket2Fill } from "react-icons/bs";
import logo from "@images/logo.png";
import { setStaff } from "@store/slices/staff";
import { useDispatch } from "react-redux";
import { fetchStaff } from "@api";
import styled from "@emotion/styled";
import { GrMoney } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";

const { Text, Title: AntdTitle } = Typography;

const Title = styled(AntdTitle)`
	margin: 0px !important;
`;
const { Content, Sider } = AntdLayout;
interface MenuItemType {
	key: string;
	icon: React.ReactNode;
	path: string;
	label: string;
}

const items: MenuItemType[] = [
	{
		key: "dashboard",
		icon: <RxDashboard />,
		path: "/admin/dashboard",
		label: "Dashboard",
	},
	{
		key: "staff",
		icon: <BsPeopleFill />,
		path: "/admin/staff",
		label: "Staff",
	},
	{
		key: "payroll",
		icon: <FaFileInvoiceDollar />,
		path: "/admin/payroll",
		label: "Payroll",
	},
	{
		key: "memo",
		icon: <MdOutlineAutoAwesomeMotion />,
		path: "/admin/memo",
		label: "Memo",
	},
	{
		key: "circulars",
		icon: <IoDocumentText />,
		path: "/admin/circulars",
		label: "Circulars",
	},
	{
		key: "maintenance",
		icon: <MdOutlineSettingsSuggest />,
		path: "/admin/maintenance",
		label: "Maintenance",
	},
	{
		key: "logistics",
		icon: <RiTruckFill />,
		path: "/admin/logistics",
		label: "Logistics",
	},
	{
		key: "officeBudget",
		icon: <FaSackDollar />,
		path: "/admin/office-budget",
		label: "Office Budget",
	},
	{
		key: "stocksAndInventory",
		icon: <RiStockLine />,
		path: "/admin/stocks-and-inventory",
		label: "Stocks and Inventory",
	},
	{
		key: "notifications",
		icon: <IoIosNotifications />,
		path: "/admin/notifications",
		label: "Notifications",
	},
	{
		key: "capacityBuilding",
		icon: <IoMdPerson />,
		path: "/admin/capacity-building",
		label: "Capacity Building",
	},
	{
		key: "procurements",
		icon: <BsBasket2Fill />,
		path: "/admin/procurements",
		label: "Procurements",
	},
];
const Layout = ({ children }: { children?: React.ReactNode }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	function pageDetails(): {
		title: string;
		text: string;
		icon: React.ReactNode;
	} {
		const path = location.pathname.replace("/admin/", "");
		switch (path) {
			case "dashboard":
				return {
					title: "",
					text: "dfssdfsdfsdfsdfds",
					icon: <FaHome />,
				};
			case "staff":
				return {
					title: "All Staff",
					text: "View, search for and add new staff",
					icon: <BsPersonFill />,
				};
			case "payroll":
				return {
					title: "Payroll",
					text: "Generate and send payroll to account.",
					icon: <GrMoney />,
				};
			case "memo":
				return {
					title: "Memo",
					text: "Create and send memos to designated offices.",
					icon: <GoCalendar />,
				};
			default:
				return {
					title: "Default Title",
					text: "Default matn.",
					icon: <FaHome />,
				};
		}
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				const staffRes = await fetchStaff();

				dispatch(setStaff(staffRes));
			} catch (error) {
				console.log("error");
			}
		};
		fetchData();
	}, [dispatch]);
	const {
		title: pageTitle,
		text: pageText,
		icon: pageIcon,
	}: {
		title: string;
		text: string;
		icon: React.ReactNode;
	} = pageDetails();
	return (
		<AntdLayout>
			<Sider theme="light" collapsible={false} width={260}>
				<div className="text-center demo-logo-vertical pt-9 pb-7">
					<img src={logo} alt="Logo" className="mx-auto" />
					<p className="text-base text-blue-700">
						UiUxOtor
					</p>
					<p>ERP System</p>
				</div>
				<Menu
					theme="light"
					selectedKeys={[location.pathname]}
					mode="inline"
				>
					{items.map((item) => (
						<Menu.Item
							key={item.path}
							icon={item.icon}
							style={{
								margin: 0,
								borderRadius: 0,
								width: "100%",
								borderLeft:
									location.pathname === item.path
										? "6px solid #5584CE"
										: "6px solid transparent",
								backgroundColor:
									location.pathname === item.path
										? "#e6f4ff"
										: "transparent",
								color:
									location.pathname === item.path
										? "#1677ff"
										: "#000000",
							}}
						>
							<Link to={item.path}>{item.label}</Link>
						</Menu.Item>
					))}
				</Menu>
			</Sider>
			<AntdLayout>
				<Content
					style={{
						padding: "20px",
						minHeight: "100vh",
						backgroundColor: "#F8F9FD",
					}}
				>
					<Flex
						justify="space-between"
						align="center"
						style={{
							marginBottom: "16px",
						}}
					>
						<div>
							<Title
								level={3}
								style={{
									display: "flex",
									alignItems: "center",
									gap: "5px",
								}}
							>
								<div className="text-blue-500">
									{pageIcon}
								</div>
								{pageTitle}
							</Title>
							<Text>{pageText}</Text>
						</div>
						<Text type="secondary">Time: 14:30</Text>
					</Flex>
					{children}
				</Content>
			</AntdLayout>
		</AntdLayout>
	);
};

export default Layout;
