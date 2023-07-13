import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
