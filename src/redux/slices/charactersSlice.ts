import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../interfaces";

interface CharactersState {
  loading: boolean;
  characters: ICharacter[];
  error: string;
  count: number;
  pages: number;
  next: string;
  prev: string;
}

const initialState: CharactersState = {
  loading: false,
  error: "",
  characters: [],
  count: 0,
  pages: 0,
  next: "",
  prev: "",
};

interface CharactersPayload {
  characters: ICharacter[];
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<CharactersPayload>) {
      state.loading = false;
      state.characters = action.payload.characters;
      state.count = action.payload.count;
      state.pages = action.payload.pages;
      state.next = action.payload.next;
      state.prev = action.payload.prev;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default charactersSlice.reducer;
