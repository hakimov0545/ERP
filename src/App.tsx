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
