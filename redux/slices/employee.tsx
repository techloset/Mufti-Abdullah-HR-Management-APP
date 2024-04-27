import instance from "@/utils/Instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  employeeData: [],
  isLoading: false,
};

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    try {
      const res = await instance.get("employee");
      return res.data.data;
    } catch (error: any) {
      console.error("Error fetching employees:", error);
      throw new Error(error?.message || "Error fetching employees");
    }
  }
);
export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employeeData: FormData) => {
    try {
      const response = await instance.post(`employee`, employeeData);

      console.log("Added new employee:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding employee:", error);
      throw error;
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id: string) => {
    try {
      const response = await instance.delete("employee", { id });
      console.log("Deleted employee with id:", id);
      return response.data;
    } catch (error) {
      console.error("Error deleting employee:", error);
      throw error;
    }
  }
);
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async ({ id, data }: { id: any; data: any }) => {
    try {
      const response = await axios.put(`employee`, {
        id,
        ...data,
      });

      console.log("Updated employee with id:", id);

      return response.data;
    } catch (error) {
      console.error("Error updating employee:", error);
      throw error;
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeData = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employeeData = state.employeeData.filter(
          (employee) => employee.id !== action.payload
        );
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.employeeData = action.payload;
        console.log("Employee updated successfully:", action.payload);
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employeeData.push(action.payload);
        console.log("Employee added successfully:", action.payload);
      });
  },
});

export default employeeSlice.reducer;
