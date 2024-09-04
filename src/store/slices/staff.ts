import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define and export StaffState
export interface StaffState {
  staff: any[];
}

const initialState: StaffState = {
  staff: [],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setStaff: (state, action: PayloadAction<any[]>) => {
      state.staff = action.payload;
    },
  },
});

export const { setStaff } = staffSlice.actions;
export default staffSlice.reducer;
