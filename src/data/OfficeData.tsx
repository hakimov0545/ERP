import { TableProps } from "antd";

export const TableCols: TableProps["columns"] = [
  {
    title: "S/N",
    dataIndex: "index",
    key: "index",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "No.",
    dataIndex: "No",
    key: "No",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: " Amount ($)",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Actual Amount ($)",
    dataIndex: "actualAmount",
    key: "actualAmount",
  },
  {
    title: "Variance ($)",
    dataIndex: "varianceAmount",
    key: "varianceAmount",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];
