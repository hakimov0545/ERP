import axios from "axios";

export const api = axios.create({
	baseURL: "https://642b-213-230-88-105.ngrok-free.app",
});

export const fetchStaff = async () => {
	const res = await api.post("/users/find-many", {});
	return res.data;
};

export const fetchEmployees = async () => {
	const res = await api.post("/employees/find-many", {});
	return res.data;
};

export const fetchDepartment = async () => {
	const res = await api.post("/department/find-many", {});
	return res.data;
};

export const fetchPayroll = async () => {
	const res = await api.post("/payroll/find-many", {});
	return res.data;
};

export const fetchPaymentVoucher = async () => {
	const res = await api.post("/payment-voucher/find-many", {});
	return res.data;
};
