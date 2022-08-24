import { DataType } from "../Components/DataType";

export type CountriesInitialStateType = {
  countries: DataType[];
};
export type ActionType = {
  type: string;
  payload: DataType[];
};
