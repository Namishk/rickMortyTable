import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Character } from "../../components/table/columns"

interface FavouriteState {
  favourites: Character[]
  modalOpen: boolean
  removeFavourite: number
}

const initialState: FavouriteState = {
  favourites: [],
  modalOpen: false,
  removeFavourite: -1,
}

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState:
    localStorage.getItem("favourites") === "undefined"
      ? initialState
      : {
          ...initialState,
          favourites: JSON.parse(localStorage.getItem("favourites") || "[]"),
        },
  reducers: {
    addFavourite: (state, action: PayloadAction<Character>) => {
      state.favourites.push(action.payload)
      console.log([...new Set(state.favourites)][0], "add")
      state.removeFavourite = -1
      localStorage.setItem("favourites", JSON.stringify(state.favourites))
    },
    removeFavourite: (state, action: PayloadAction<Number>) => {
      state.favourites = state.favourites.filter(
        (favourite: Character) => favourite.id !== action.payload,
      )
      localStorage.setItem("favourites", JSON.stringify(state.favourites))
    },
    favouriteModalOpen: (state, action: PayloadAction<Character>) => {
      state.modalOpen = true
      state.removeFavourite = action.payload.id
    },
    favouriteModalClose: (state) => {
      state.modalOpen = false
      state.removeFavourite = -1
    },
  },
})
export const {
  addFavourite,
  removeFavourite,
  favouriteModalClose,
  favouriteModalOpen,
} = favouriteSlice.actions
export default favouriteSlice.reducer
