import { Action } from "history";
import { CountriesInitialStateType } from "./types";
import { CountriesActionType } from "./types";

export const countriesReducer = (
  state: CountriesInitialStateType,
  action: CountriesActionType
) => {
  switch (action.type) {
    case "ADD_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SET_PARAM":
      return {
        ...state,
        param: action.param,
      };
    default:
      return state;
  }
};
