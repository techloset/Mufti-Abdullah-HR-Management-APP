import { State } from "@/app/(auth)/register/useRegister";
import instance from "@/utils/Instance";
import { User } from "@prisma/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface UserState {
  user: User[];
  isLoading: boolean;
}
const initialState: UserState = {
  user: [],
  isLoading: false,
};

export const addUser = createAsyncThunk(
  "user/addUser",
  async (userData: State) => {
    try {
      const response = await instance.post("register", userData);

      return response.data;
    } catch (error: any) {
      console.error("Error adding User:", error);
      throw new Error(error?.message || "Error adding user");
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

      return response.data;
    } catch (error: any) {
      console.error("Error updating User:", error);
      throw new Error(error?.message || "Error updating Password");
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async ({ email, data }: { email: string; data: {} }) => {
    try {
      const response = await instance.put(`forgotPassword`, {
        email,
        ...data,
      });

      return response.data;
    } catch (error: any) {
      console.error("Error updating User:", error);
      throw new Error(error?.message || "Error updating User");
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
        const user = action.payload as User;
        state.user.push(user);
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        const user = action.payload as User;
        state.user.push(user);
      });
  },
});

export default userSLice.reducer;
