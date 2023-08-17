import getCode from "@/services/getCode";
import getPurchasedSubscriptions from "@/services/getPurchasedSubscriptions";
import postActivateCode from "@/services/postActivateCode";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getUsersSubscriptions = createAsyncThunk("subscriptions/subscriptions", async (token: string, thunkAPI) => {
  try {
    return await getPurchasedSubscriptions(token)
      .then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
})

export const getCodesById = createAsyncThunk("subscriptions/codes", async ({ subscriptionId, token }: { subscriptionId: number, token: string }, thunkAPI) => {
  try {
    return await getCode(token, subscriptionId)
      .then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
})

export const activateCode = createAsyncThunk("subscriptions/activate", async ({ domain, code, id }: { domain: string, code: string, id: number }, thunkAPI) => {
  try {
    return await postActivateCode(domain, code)
      .then(res => ({
        id: id,
        code: res.data
      }));
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
})


type TSubscription = {
  status: string,
  name: string,
  date: string,
  price: number
}

type TCode = {
  codeId: number,
  code: string,
  status: string,
  origin: string
}

export interface IAuthState {
  loading: boolean,
  subscriptions: TSubscription[],
  codes: TCode[]
}

const initialState: IAuthState = {
  loading: false,
  subscriptions: [],
  codes: []
};

const subscriptionsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsersSubscriptions.pending, state => {
        state.loading = true
      })
      .addCase(getUsersSubscriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptions = action.payload.subscriptions;
        state.codes = action.payload.firstSubscriptionsCodes;
      })
      .addCase(getCodesById.pending, state => {
        state.loading = true
      })
      .addCase(getCodesById.fulfilled, (state, action) => {
        state.loading = false;
        state.codes = action.payload;
      })
      .addCase(activateCode.pending, state => {
        state.loading = true
      })
      .addCase(activateCode.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.codes[action.payload.id] = action.payload.code;
        }
      })
  }
});

// export const {  } = subscriptionsSlice.actions;
export default subscriptionsSlice.reducer;