import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface IAuthState {
  username: string;
  token: string;
}

const initialState: IAuthState = {
  username: "",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODU3MTc3fQ.5TxOsX5kbUVH1WefHWRiDwfmND2ZgwV6B9iWcJJ7xAI",
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