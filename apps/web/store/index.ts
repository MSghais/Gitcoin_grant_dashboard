// store.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { grantSlice } from "./grants";
// Create the Redux store
const store = configureStore({
  reducer: {
    grant:grantSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
