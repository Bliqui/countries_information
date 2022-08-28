import { DataType } from "../Components/DataType";

export type CountriesInitialStateType = {
  countries: DataType[];
  param: string;
};

export type CountriesActionType = {
  type: string;
  payload: DataType[];
  param: string;
};
