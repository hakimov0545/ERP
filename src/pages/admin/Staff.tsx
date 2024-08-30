import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { Button, Input, Select, Space, Table } from "antd";

export const Staff: React.FC = () => {
  const staff = useSelector((state: RootState) => state.staff.staff);

  // Define the table columns based on the data you provided
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
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
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
      render: (text: string) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any) => (
        <Space size="middle">
          <a className="text-blue-400">View more</a>
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
    phoneNumber: `+${item.phoneNumber}`,
    designation: item.designation,
    role: item.role,
  }));

  return (
    <div>
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "white",
          width: "100%",
          height: "130px",
        }}
        className="flex items-center justify-between px-5 py-6 mb-5"
      >
        <div style={{ width: "350px" }}>
          <p className="mb-3 text-lg">Quick search a staff</p>
          <Input
            placeholder="Enter a search word"
            className="h-[50px]"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div>
          <p className="text-2xl font-bold">{staff.length}</p>
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
            <Select.Option value="all">All staff</Select.Option>
            <Select.Option value="">Other option</Select.Option>
          </Select>
        </div>
        <Button
          type="primary"
          style={{
            height: "50px",
            borderRadius: "15px",
            padding: "12px 40px",
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
        <div className="flex items-center justify-between mb-10">
          <p className="text-2xl font-bold">All staff</p>
          <p className="text-lg">Showing 10 per page</p>
        </div>
        <Table columns={columns} rowHoverable={false} dataSource={data} />
      </div>
    </div>
  );
};
