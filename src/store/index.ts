import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./slices/staff";
import employeesReducer from "./slices/employees";
import payrollReducer from "./slices/payroll";
import officeBudgetReducer from "./slices/officeBudget";

const store = configureStore({
	reducer: {
		staff: staffReducer,
		employees: employeesReducer,
		payroll: payrollReducer,
		officeBudget:officeBudgetReducer
	},
	
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
