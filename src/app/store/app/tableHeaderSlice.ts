import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableHeaderState {
  columns: {
    valueIn: string;
    label: string;
  }[];
}

const initialState: TableHeaderState = {
  columns: [],
};

const tableHeaderSlice = createSlice({
  name: "tableHeader",
  initialState,
  reducers: {
    headers(
      state,
      action: PayloadAction<{ valueIn: string; label: string }[]>,
    ) {
      state.columns = [...action.payload];
    },
  },
});

export const { headers } = tableHeaderSlice.actions;

export default tableHeaderSlice.reducer;
