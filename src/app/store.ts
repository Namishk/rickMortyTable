import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import favouriteSlice from "../features/favourite/favouriteSlice"
import detailsSlice from "../features/details/detailsSlice"

export const store = configureStore({
  reducer: {
    favourite: favouriteSlice,
    details: detailsSlice,
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
