import React from "react";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from "react-router-dom";
import { Login } from "@pages/login/login";
import Layout from "@components/Layout";
import { Dashboard } from "@pages/admin/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Navigate to="/login" replace />}
				/>
				<Route path="/login" element={<Login />} />
				<Route
					path="/admin"
					element={
						<Layout>
							<Outlet />
						</Layout>
					}
				>
					<Route path="dashboard" element={<Dashboard />} />
					<Route
						path="staff"
						element={<div>Staff Page</div>}
					/>
					<Route
						path="paymentVoucher"
						element={<div>Payment Voucher Page</div>}
					/>
					<Route
						path="payroll"
						element={<div>Payroll Page</div>}
					/>
					<Route
						path="memo"
						element={<div>Memo Page</div>}
					/>
					<Route
						path="circulars"
						element={<div>Circulars Page</div>}
					/>
					<Route
						path="maintenance"
						element={<div>Maintenance Page</div>}
					/>
					<Route
						path="logistics"
						element={<div>Logistics Page</div>}
					/>
					<Route
						path="officeBudget"
						element={<div>Office Budget Page</div>}
					/>
					<Route
						path="stocksAndInventory"
						element={<div>Stocks and Inventory Page</div>}
					/>
					<Route
						path="notifications"
						element={<div>Notifications Page</div>}
					/>
					<Route
						path="capacityBuilding"
						element={<div>Capacity Building Page</div>}
					/>
					<Route
						path="procurements"
						element={<div>Procurements Page</div>}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
