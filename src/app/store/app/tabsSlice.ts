import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TabState {
  activeTab: string;
  tabMerchants: string;
}

const initialState: TabState = {
  activeTab: "All", // Default value
  tabMerchants: "Company",  
};

const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
    setTabMerchants(state, action: PayloadAction<string>) {
      state.tabMerchants = action.payload;
    },
  },
});

export const { setActiveTab, setTabMerchants } = tabSlice.actions;
export default tabSlice.reducer;
