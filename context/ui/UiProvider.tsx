import { FC, useReducer } from "react";
import { UiContext, UiReducer } from "./";

export interface UiState {
  isMenuOpen: boolean;
}

interface UiProviderProps {
  children: JSX.Element;
}

const UI_INITIAL_STATE: UiState = {
  isMenuOpen: false,
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "[UI] - ToggleMenu" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
