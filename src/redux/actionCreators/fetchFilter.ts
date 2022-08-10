// import { useState } from "react";
// import axios from "../../common/axios";
// import { AllCharacter, ICharacter } from "../../interfaces";
// import { charactersSlice } from "../slices/charactersSlice";
// import { filterSlice } from "../slices/filterSlice";
// import { AppDispatch } from "../store";

// export const fetchFilter = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       dispatch(filterSlice.actions.fetching());
//       const response = await Promise.all([
//         axios.get("/character", {
//           params: { gender: {} },
//         }),
//         axios.get("/character", {
//           params: { status: "alive" },
//         }),
//         axios.get("/character", {
//           params: { species: {} },
//         }),
//       ]);

//       dispatch(
//         filterSlice.actions.fetchSuccess({
//           gender: response[0].data,
//           status: response[1].data,
//           species: response[2].data,
//         })
//       );
//     } catch (error) {
//       dispatch(charactersSlice.actions.fetchError(error as Error));
//     }
//   };
// };
export {};
