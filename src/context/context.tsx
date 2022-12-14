import { createContext, Dispatch, ReactElement, useReducer } from "react";
import { countriesReducer } from "./countriesReducer";
import { CountriesActionType, CountriesInitialStateType } from "./types";

export const DEFAULT_PARAM = "name";

const countriesInitialState = {
  countries: [],
  param: DEFAULT_PARAM,
};

export const CountriesContext = createContext<{
  state: CountriesInitialStateType;
  dispatch: Dispatch<CountriesActionType>;
}>({ state: countriesInitialState, dispatch: () => null });

export const AppProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(countriesReducer, countriesInitialState);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};
