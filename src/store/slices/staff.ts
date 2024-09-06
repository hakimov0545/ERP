import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IStaff} from "@Interface/Interface";

// Define and export StaffState
export interface StaffState {
  staff: IStaff[];
}

const initialState: StaffState = {
  staff: [],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setStaff: (state, action: PayloadAction<IStaff[]>) => {
      state.staff = action.payload;
    },
	  addStaff: (state, action: PayloadAction<IStaff>) => {
			state.staff = [...state.staff, action.payload];
	  }
  },
});

export const { setStaff, addStaff } = staffSlice.actions;
export default staffSlice.reducer;
