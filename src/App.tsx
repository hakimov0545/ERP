import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import { Login } from "@pages/login/login";
import Layout from "@components/Layout";
import { Dashboard } from "@pages/admin/Dashboard";
import { Staff } from "@pages/admin/Staff";
import PageError from "@pages/PageError";
import { StaffForm } from "@forms/StaffForm";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/login" replace />,
	},
	{
		path: "/login",
		errorElement: <PageError />,
		element: <Login />,
	},
	{
		path: "admin",
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{ path: "staff", element: <Staff />, index: true },
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "staff/edit",
				element: <StaffForm />,
			},
			{
				path: "paymentVoucher",
				element: <div>payment Voucher</div>,
			},
			{
				path: "payroll",
				element: <div>payroll</div>,
			},
			{
				path: "memo",
				element: <div>memo</div>,
			},
			{
				path: "circulars",
				element: <div>circulars</div>,
			},
			{
				path: "maintenance",
				element: <div>maintenance</div>,
			},
			{
				path: "logistics",
				element: <div>logistics</div>,
			},
			{
				path: "officeBudget",
				element: <div>Office Budget</div>,
			},
			{
				path: "stocksAndInventory",
				element: <div>Stocks And Inventory</div>,
			},
			{
				path: "notifications",
				element: <div>notifications</div>,
			},
			{
				path: "capacityBuilding",
				element: <div>Capacity Building</div>,
			},
			{
				path: "procurements",
				element: <div>procurements</div>,
			},
		],
	},
	{
		path: "*",
		element: <PageError />,
	},
]);

function App() {
	return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
