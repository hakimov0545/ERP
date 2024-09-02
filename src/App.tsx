import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Login } from "@pages/login/login";
import Layout from "@components/Layout";
import { Dashboard } from "@pages/admin/Dashboard";
import { Staff } from "@pages/admin/Staff";
import PageError from "@pages/PageError";
const routes = createBrowserRouter([
  {
    path: "/login",
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
      { index: true, path: "staff", element: <Staff /> },
      { index: true, path: "dashboard", element: <Dashboard /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
