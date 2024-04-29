import { State } from "@/app/(auth)/register/useRegister";
import instance from "@/utils/Instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isLoading: false,
};

export const addUser = createAsyncThunk(
  "user/addUser",
  async (userData: State) => {
    try {
      const response = await instance.post(`register`, userData);

      console.log("Added new User:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding User:", error);
      throw error;
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "user/updateUserPassword",
  async ({ email, data }: { email: string; data: {} }) => {
    try {
      const response = await instance.put(`passwordUpdate`, {
        email,
        ...data,
      });

      console.log("Updated user with id:", email);

      return response.data;
    } catch (error) {
      console.error("Error updating User:", error);
      throw error;
    }
  }
);

const userSLice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUserPassword.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(addUser.fulfilled, (state, action) => {
        state.user.push(action.payload);
        console.log("User added successfully:", action.payload);
      });
  },
});

export default userSLice.reducer;
