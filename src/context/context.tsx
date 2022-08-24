import { createContext, Dispatch, ReactElement, useReducer } from "react";
import { countriesReducer } from "./countriesReducer";
import { ActionType, CountriesInitialStateType } from "./types";

const countriesInitialState = {
  countries: [],
};

export const CountriesContext = createContext<{
  state: CountriesInitialStateType;
  dispatch: Dispatch<ActionType>;
}>({ state: countriesInitialState, dispatch: () => null });

export const AppProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(countriesReducer, countriesInitialState);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};