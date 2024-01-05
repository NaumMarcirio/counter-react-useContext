import { createContext, useEffect, useState } from "react";

//
export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [counterX2, setCounterX2] = useState(0);

  useEffect(() => {
    setCounterX2(counter * 2);
  }, [counter]);

  function somarCounter() {
    setCounter(counter + 1);
  }
  return (
    <CounterContext.Provider
      value={{ counter, setCounter, somarCounter, counterX2 }}
    >
      {children}
    </CounterContext.Provider>
  );
};
