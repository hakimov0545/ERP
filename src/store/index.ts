import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./slices/staff";
import employeesReducer from "./slices/employees";
import payrollReducer from "./slices/payroll";

const store = configureStore({
	reducer: {
		staff: staffReducer,
		employees: employeesReducer,
		payroll: payrollReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
