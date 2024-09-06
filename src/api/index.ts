import axios from "axios";
import {IStaff} from "@Interface/Interface";
import { Dispatch } from 'redux';
import {setStaff, addStaff} from "@store/slices/staff";


export const api = axios.create({
	baseURL: "https://3f8572bedc77c278.mokky.dev",
});

export const fetchStaff = async () => {
	const res = await api.get("/staff");
	return res.data;
};

export const addStaffApi = async  ({newStaff, dispatch}: {newStaff: IStaff, dispatch: Dispatch}) => {
	await api.post("/staff", newStaff);
	dispatch(addStaff(newStaff))
}

export const editStaffApi = async({id, newStaff, dispatch}: {id: number| string, newStaff: IStaff, dispatch: Dispatch}) => {
	await api.patch(`/staff/${id}`, newStaff);
	const res = await  api.get("/staff");
	dispatch(setStaff(res.data))
}

export const deleteStaff = async  ({id, dispatch}: {id: number| string, dispatch: Dispatch}) => {
	await api.delete(`/staff/${id}`);
	const res = await  api.get("/staff");
	dispatch(setStaff(res.data))
}

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
