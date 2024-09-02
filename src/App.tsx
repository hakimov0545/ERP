import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Login } from "@pages/login/login";
import Layout from "@components/Layout";
import { Dashboard } from "@pages/admin/Dashboard";
import { Staff } from "@pages/admin/Staff";
import PageError from "@pages/PageError";
import PaymentVaucher from "@pages/admin/PaymentVaucher";
import Payroll from "@pages/admin/Payroll";
import Memo from "@pages/admin/Memo";
import Circulars from "@pages/admin/Circulars";
import Maintenance from "@pages/admin/Maintenance";
import Logistics from "@pages/admin/Logistics";
import OfficeBudget from "@pages/admin/OfficeBudget";
import StocksAndInventory from "@pages/admin/StocksAndInventory";
import CapacityBuilding from "@pages/admin/CapacityBuilding";
import Notifications from "@pages/admin/Notifications";
import Procurements from "@pages/admin/Procurements";
const routes = createBrowserRouter([
  {
    path: "/login",
    index: true,
    errorElement: <PageError />,
    element: <Login></Login>,
  },
  {
    path: "admin",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { index: true, path: "dashboard", element: <Dashboard /> },
      { path: "staff", element: <Staff /> },
      { path: "payment-voucher", element: <PaymentVaucher /> },
      { path: "payroll", element: <Payroll /> },
      { path: "memo", element: <Memo /> },
      { path: "circulars", element: <Circulars /> },
      { path: "maintenance", element: <Maintenance /> },
      { path: "logistics", element: <Logistics /> },
      { path: "office-budget", element: <OfficeBudget /> },
      { path: "stocks-and-inventory", element: <StocksAndInventory /> },
      { path: "notifications", element: <Notifications /> },
      { path: "capacity-building", element: <CapacityBuilding /> },
      { path: "procurements", element: <Procurements /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
