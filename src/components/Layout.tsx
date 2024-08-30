import React, { useEffect } from "react";
import { Layout as AntdLayout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { fetchEmployees, fetchPayroll, fetchStaff } from "@api";
import { setEmployees } from "@store/slices/employees";
import { setPayroll } from "@store/slices/payroll";

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
    key: "paymentVoucher",
    icon: <BsPeopleFill />,
    path: "/admin/paymentVoucher",
    label: "Payment Voucher",
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
    path: "/admin/officeBudget",
    label: "Office Budget",
  },
  {
    key: "stocksAndInventory",
    icon: <RiStockLine />,
    path: "/admin/stocksAndInventory",
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
    path: "/admin/capacityBuilding",
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleMenuClick = (item: { key: string }) => {
    const clickedItem = items.find((menuItem) => menuItem.key === item.key);
    if (clickedItem) {
      navigate(clickedItem.path);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const staffRes = await fetchStaff();
        const employeesRes = await fetchEmployees();
        const payrollRes = await fetchPayroll();

        dispatch(setStaff(staffRes));
        dispatch(setEmployees(employeesRes));
        dispatch(setPayroll(payrollRes));
      } catch (error) {
        console.error("Failed to fetch staff data", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <AntdLayout>
      <Sider theme="light" collapsible={false} width={260}>
        <div className="text-center demo-logo-vertical pt-9 pb-7">
          <img src={logo} alt="" className="mx-auto" />
          <p className="text-base text-blue-700">UiUxOtor</p>
          <p>ERP System</p>
        </div>
        <Menu
          theme="light"
          onClick={handleMenuClick}
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
        >
          {items.map((item) => (
            <Menu.Item
              style={{
                margin: 0,
                borderRadius: 0,
                width: "100%",
                borderLeft:
                  location.pathname === item.path
                    ? "6px solid #5584CE"
                    : "6px solid transparent",
                backgroundColor:
                  location.pathname === item.path ? "#e6f4ff" : "transparent",
                color: location.pathname === item.path ? "#1677ff" : "#000000",
              }}
              key={item.key}
              icon={item.icon}
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
          {children}
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
