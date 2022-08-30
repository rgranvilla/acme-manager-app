import { Action, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { store } from "./store";

// eslint-disable-next-line @typescript-eslint/unbound-method
const { dispatch, getState } = store;

export type AppDispatch = typeof dispatch;
export type RootState = ReturnType<typeof getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
