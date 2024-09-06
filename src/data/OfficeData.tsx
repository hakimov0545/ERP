import { IOfficeBudgetData } from "@Interface/Interface";
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
    dataIndex: "ordinalNumber",
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
export const tableData:IOfficeBudgetData[] = [
  {
    ordinalNumber: "54782309",
    description: "Lorem ipsum dolor sit amet consectetur",
    amount: "500.00",
    actualAmount: "480.00",
    varianceAmount: "20.00",
    date: "11/11/2022",
  },
  {
    ordinalNumber: "83274562",
    description: "Adipiscing elit, sed do eiusmod tempor",
    amount: "600.00",
    actualAmount: "580.00",
    varianceAmount: "20.00",
    date: "12/11/2022",
  },
  {
    ordinalNumber: "32746581",
    description: "Incididunt ut labore et dolore magna aliqua",
    amount: "700.00",
    actualAmount: "680.00",
    varianceAmount: "20.00",
    date: "13/11/2022",
  },
  {
    ordinalNumber: "65718234",
    description: "Ut enim ad minim veniam quis nostrud",
    amount: "800.00",
    actualAmount: "780.00",
    varianceAmount: "20.00",
    date: "14/11/2022",
  },
  {
    ordinalNumber: "81726345",
    description: "Exercitation ullamco laboris nisi ut aliquip",
    amount: "900.00",
    actualAmount: "880.00",
    varianceAmount: "20.00",
    date: "15/11/2022",
  },
  {
    ordinalNumber: "41782635",
    description: "Ex ea commodo consequat duis aute irure",
    amount: "1000.00",
    actualAmount: "980.00",
    varianceAmount: "20.00",
    date: "16/11/2022",
  },
  {
    ordinalNumber: "73628491",
    description: "Dolor in reprehenderit in voluptate velit",
    amount: "1100.00",
    actualAmount: "1080.00",
    varianceAmount: "20.00",
    date: "17/11/2022",
  },
  {
    ordinalNumber: "52637149",
    description: "Esse cillum dolore eu fugiat nulla pariatur",
    amount: "1200.00",
    actualAmount: "1180.00",
    varianceAmount: "20.00",
    date: "18/11/2022",
  },
  {
    ordinalNumber: "17364258",
    description: "Excepteur sint occaecat cupidatat non",
    amount: "1300.00",
    actualAmount: "1280.00",
    varianceAmount: "20.00",
    date: "19/11/2022",
  },
  {
    ordinalNumber: "91827364",
    description: "Proident sunt in culpa qui officia deserunt",
    amount: "1400.00",
    actualAmount: "1380.00",
    varianceAmount: "20.00",
    date: "20/11/2022",
  },
  {
    ordinalNumber: "52837465",
    description: "Mollit anim id est laborum, veniam ad",
    amount: "1500.00",
    actualAmount: "1480.00",
    varianceAmount: "20.00",
    date: "21/11/2022",
  },
  {
    ordinalNumber: "84625379",
    description: "Consequat elit esse consequat voluptate",
    amount: "1600.00",
    actualAmount: "1580.00",
    varianceAmount: "20.00",
    date: "22/11/2022",
  },
  {
    ordinalNumber: "61728345",
    description: "Reprehenderit qui ea nulla pariatur",
    amount: "1700.00",
    actualAmount: "1680.00",
    varianceAmount: "20.00",
    date: "23/11/2022",
  },
  {
    ordinalNumber: "19472635",
    description: "Laboris nisi ut aliquip ex ea commodo",
    amount: "1800.00",
    actualAmount: "1780.00",
    varianceAmount: "20.00",
    date: "24/11/2022",
  },
  {
    ordinalNumber: "85726419",
    description: "Voluptate velit esse cillum dolore",
    amount: "1900.00",
    actualAmount: "1880.00",
    varianceAmount: "20.00",
    date: "25/11/2022",
  },
  {
    ordinalNumber: "93827641",
    description: "Tempor incididunt ut labore et dolore",
    amount: "2000.00",
    actualAmount: "1980.00",
    varianceAmount: "20.00",
    date: "26/11/2022",
  },
  {
    ordinalNumber: "61372849",
    description: "Ut enim ad minim veniam quis nostrud",
    amount: "2100.00",
    actualAmount: "2080.00",
    varianceAmount: "20.00",
    date: "27/11/2022",
  },
  {
    ordinalNumber: "28736415",
    description: "Quis nostrud exercitation ullamco laboris",
    amount: "2200.00",
    actualAmount: "2180.00",
    varianceAmount: "20.00",
    date: "28/11/2022",
  },
  {
    ordinalNumber: "45627138",
    description: "Nisi ut aliquip ex ea commodo consequat",
    amount: "2300.00",
    actualAmount: "2280.00",
    varianceAmount: "20.00",
    date: "29/11/2022",
  },
  {
    ordinalNumber: "84726319",
    description: "Duis aute irure dolor in reprehenderit",
    amount: "2400.00",
    actualAmount: "2380.00",
    varianceAmount: "20.00",
    date: "30/11/2022",
  },
  {
    ordinalNumber: "91827356",
    description: "In voluptate velit esse cillum dolore",
    amount: "2500.00",
    actualAmount: "2480.00",
    varianceAmount: "20.00",
    date: "01/12/2022",
  },
  {
    ordinalNumber: "61728395",
    description: "Eu fugiat nulla pariatur excepturi",
    amount: "2600.00",
    actualAmount: "2580.00",
    varianceAmount: "20.00",
    date: "02/12/2022",
  },
  {
    ordinalNumber: "34782915",
    description: "Excepteur sint occaecat cupidatat non",
    amount: "2700.00",
    actualAmount: "2680.00",
    varianceAmount: "20.00",
    date: "03/12/2022",
  },
  {
    ordinalNumber: "71928346",
    description: "Proident sunt in culpa qui officia deserunt",
    amount: "2800.00",
    actualAmount: "2780.00",
    varianceAmount: "20.00",
    date: "04/12/2022",
  },
  {
    ordinalNumber: "26573849",
    description: "Mollit anim id est laborum ullamco laboris",
    amount: "2900.00",
    actualAmount: "2880.00",
    varianceAmount: "20.00",
    date: "05/12/2022",
  },
  {
    ordinalNumber: "37461592",
    description: "Exercitation ullamco laboris nisi ut",
    amount: "3000.00",
    actualAmount: "2980.00",
    varianceAmount: "20.00",
    date: "06/12/2022",
  },
  {
    ordinalNumber: "46127385",
    description: "Adipiscing elit, sed do eiusmod tempor",
    amount: "3100.00",
    actualAmount: "3080.00",
    varianceAmount: "20.00",
    date: "07/12/2022",
  },
  {
    ordinalNumber: "98473615",
    description: "Ex ea commodo consequat irure dolor",
    amount: "3200.00",
    actualAmount: "3180.00",
    varianceAmount: "20.00",
    date: "08/12/2022",
  },
  {
    ordinalNumber: "61527389",
    description: "Incididunt ut labore et dolore magna aliqua",
    amount: "3300.00",
    actualAmount: "3280.00",
    varianceAmount: "20.00",
    date: "09/12/2022",
  }
];

