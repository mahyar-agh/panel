import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requests: 10,
  visitsToday: 652,
  currentEmail: "aghajanpour@parsdata.com",
};

export const shareListing = createSlice({
  name: "shareList",
  initialState,
  reducers: {
    editCurrentEmail: (state, action) => {
      state.currentEmail = action.payload;
    },
  },
});

export const { editCurrentEmail } = shareListing.actions;

export default shareListing.reducer;
