import { IGetCodesById, IActivateCode, TCode } from "./type";

import getCode from "@/services/getCode";
import getPurchasedSubscriptions from "@/services/getPurchasedSubscriptions";
import postActivateCode from "@/services/postActivateCode";
import { TPurchasedSubscriptions } from "@/types";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersSubscriptions = createAsyncThunk<TPurchasedSubscriptions, string>(
  "subscriptions/getSubscriptions",
  async (token: string) => {
    return await getPurchasedSubscriptions(token)
      .then(res => res.data);
  })

export const getCodesById = createAsyncThunk<TCode[], IGetCodesById>(
  "subscriptions/getCodes",
  async ({ subscriptionId, token }) => {
    return await getCode(token, subscriptionId)
      .then(res => res.data);

  })

export const activateCode = createAsyncThunk<{ code: TCode, id: number }, IActivateCode>(
  "subscriptions/activate",
  async ({ domain, code, id }) => {
    return await postActivateCode(domain, code)
      .then(res => ({
        id: id,
        code: res.data
      }));
  })