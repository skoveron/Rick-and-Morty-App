import axios from "../../common/axios";
import { AllCharacter, ICharacter } from "../../interfaces";
import { charactersSlice } from "../slices/charactersSlice";
import { AppDispatch } from "../store";

export const fetchCharacters = (page = 1) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(charactersSlice.actions.fetching());
      const response = await axios.get<AllCharacter<ICharacter>>("/character", {
        params: { page },
      });
      console.log(response);

      dispatch(
        charactersSlice.actions.fetchSuccess({
          characters: response.data.results,
          count: response.data.info.count,
          pages: response.data.info.pages,
          next: response.data.info.next,
          prev: response.data.info.prev,
        })
      );
    } catch (error) {
      dispatch(charactersSlice.actions.fetchError(error as Error));
    }
  };
};
