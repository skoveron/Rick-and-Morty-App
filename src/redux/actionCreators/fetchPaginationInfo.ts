import axios from "../../common/axios";
import { IPagination } from "../../interfaces";
import { paginationInfoSlice } from "../slices/paginationInfoSlice";
import { AppDispatch } from "../store";

export const fetchPaginationInfo = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(paginationInfoSlice.actions.fetching());
      const response = await axios.get<IPagination>("/character", {
        params: {},
      });
      console.log(response.data);
      dispatch(paginationInfoSlice.actions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(paginationInfoSlice.actions.fetchError(error as Error));
    }
  };
};
