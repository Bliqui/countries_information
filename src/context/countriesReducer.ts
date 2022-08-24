import { CountriesInitialStateType } from "./types";
import { ActionType } from "./types";

export const countriesReducer = (
  state: CountriesInitialStateType,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};
