import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface IAuthState {
  username: string;
  token: string;
}

const initialState: IAuthState = {
  username: "",
  token: "",
};

const authSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    }
  },
});

export const { setToken, setUsername } = authSlice.actions;
export default authSlice.reducer;