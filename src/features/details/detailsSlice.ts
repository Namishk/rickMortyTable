import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Character } from "../../components/table/columns"

interface detailsState {
  characterInfo: Character
  ModalOpen: boolean
}

const initialState: detailsState = {
  characterInfo: {
    details: -1,
    favourite: false,
    id: -1,
    name: "",
    species: "",
    status: "",
  },
  ModalOpen: false,
}

export const detailsSlice = createSlice({
  name: "favourite",
  initialState: initialState,
  reducers: {
    openDetailsDialog: (state, action: PayloadAction<Character>) => {
      state.characterInfo = action.payload
      state.ModalOpen = true
    },
    closeDetailsDialog: (state) => {
      state.ModalOpen = false
      state.characterInfo = initialState.characterInfo
    },
  },
})
export const { closeDetailsDialog, openDetailsDialog } = detailsSlice.actions
export default detailsSlice.reducer
