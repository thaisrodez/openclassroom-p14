import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "../features/employees";

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
  },
});
