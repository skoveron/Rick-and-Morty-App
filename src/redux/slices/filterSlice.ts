// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
//   ICharacterGender,
//   ICharacterSpecies,
//   ICharacterStatus,
// } from "../../interfaces";

// interface FilterPayload {
//   gender: ICharacterGender[];
//   species: ICharacterSpecies[];
//   status: ICharacterStatus;
// }

// interface FilterState {
//   loading: boolean;
//   species: ICharacterSpecies[];
//   gender: ICharacterGender[];
//   status: ICharacterStatus[];
// }

// const initialState: FilterState = {
//   loading: false,
//   species: [],
//   gender: [],
//   status: [],
// };

// export const filterSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {
//     fetching(state) {
//       state.loading = true;
//     },
//     fetchSuccess(state, action: PayloadAction<FilterPayload>) {
//       state.loading = false;
//       state.species = action.payload.species;
//       state.gender = action.payload.gender;
//       state.status = action.payload.status.alive;
//     },
//   },
// });

// export default filterSlice.reducer;
export {};
