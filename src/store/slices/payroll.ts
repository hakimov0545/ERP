import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PayrollState {
	payroll: any[];
}

const initialState: PayrollState = {
	payroll: [],
};

const payrollSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setPayroll: (state, action: PayloadAction<any[]>) => {
			state.payroll = action.payload;
		},
	},
});

export const { setPayroll } = payrollSlice.actions;
export default payrollSlice.reducer;
