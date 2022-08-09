import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPagination } from "../../interfaces";

interface PaginationInfoState {
  loading: boolean;
  paginationInfo: IPagination;
  error: string;
}

const initialState: PaginationInfoState = {
  loading: false,
  error: "",
  paginationInfo: { count: 0, pages: 0, next: "", prev: "" },
};

export const paginationInfoSlice = createSlice({
  name: "paginationInfo",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IPagination>) {
      state.loading = false;
      state.paginationInfo.count = action.payload.count;
      state.paginationInfo.next = action.payload.next;
      state.paginationInfo.pages = action.payload.pages;
      state.paginationInfo.prev = action.payload.prev;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default paginationInfoSlice.reducer;
