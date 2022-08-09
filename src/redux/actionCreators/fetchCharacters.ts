import axios from "../../common/axios";
import { AllCharacter, ICharacter } from "../../interfaces";
import { charactersSlice } from "../slices/charactersSlice";
import { AppDispatch } from "../store";

export const fetchCharacters = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(charactersSlice.actions.fetching());
      const response = await axios.get<AllCharacter<ICharacter>>("/character", {
        params: {},
      });

      dispatch(charactersSlice.actions.fetchSuccess(response.data.results));
    } catch (error) {
      dispatch(charactersSlice.actions.fetchError(error as Error));
    }
  };
};
