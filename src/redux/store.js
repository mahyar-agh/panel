import { configureStore } from "@reduxjs/toolkit";
import shareListingSlice from "./slices/shareListingSlice";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    shareList: shareListingSlice,
    users: usersSlice,
  },
});
