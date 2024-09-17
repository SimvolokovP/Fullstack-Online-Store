import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import devicesReducer from "./slices/devicesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    devices: devicesReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
