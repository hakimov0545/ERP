import { tableData } from "@data/OfficeData";
import { createSlice } from "@reduxjs/toolkit";

const officeBudgetSlice=createSlice({
    name:"officeBudget",
    initialState:tableData,
    reducers:{

    }
})

export default officeBudgetSlice.reducer