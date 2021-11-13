import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jsonPlaceholder from "../../apis/jsonPlaceholder";
import "regenerator-runtime/runtime";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await jsonPlaceholder.get("/users");
  return response.data;
});

const users = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export const { deleteUser } = users.actions;
export default users.reducer;
