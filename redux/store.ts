import { configureStore } from "@reduxjs/toolkit";
import getEmployees from "./slices/employee";
import getUser from "./slices/user";

const store = configureStore({
  reducer: { employees: getEmployees, users: getUser },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
