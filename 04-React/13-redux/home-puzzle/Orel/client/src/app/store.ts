import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import ImgBox from "../features/images/imgBoxSlice"

export const store = configureStore({
  reducer: {
    images: ImgBox,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
