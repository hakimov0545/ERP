import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define and export StaffState
export interface EmployeesState {
	employees: any[];
}

const initialState: EmployeesState = {
	employees: [],
};

const employeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setEmployees: (state, action: PayloadAction<any[]>) => {
			state.employees = action.payload;
		},
	},
});

export const { setEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
