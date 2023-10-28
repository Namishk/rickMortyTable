import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Character } from "../../components/table/columns"

interface FavouriteState {
  favourites: Character[]
}

const initialState: FavouriteState = {
  favourites: [],
}

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Character>) => {
      state.favourites.push(action.payload)
    },
    removeFavourite: (state, action: PayloadAction<Character>) => {
      state.favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id,
      )
    },
  },
})
export const { addFavourite, removeFavourite } = favouriteSlice.actions
export default favouriteSlice.reducer
