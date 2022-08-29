import { DEFAULT_PARAM } from "./context";
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
        countries: action.payload || [],
      };
    case "SET_PARAM":
      return {
        ...state,
        param: action.param || DEFAULT_PARAM,
      };
    default:
      return state;
  }
};
