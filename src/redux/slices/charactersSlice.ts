import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../interfaces";

interface CharactersState {
  loading: boolean;
  characters: ICharacter[];
  error: string;
}

const initialState: CharactersState = {
  loading: false,
  error: "",
  characters: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<ICharacter[]>) {
      state.loading = false;
      state.characters = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default charactersSlice.reducer;
