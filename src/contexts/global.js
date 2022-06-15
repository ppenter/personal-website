import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export const GlobalProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(0);

  function fetch() {
    setTrigger(!trigger);
  }

  const value = {
    trigger: {
      fetch,
      value: trigger,
    },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
