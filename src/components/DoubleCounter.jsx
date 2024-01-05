import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const DoubleCounter = () => {
  const { counterX2 } = useContext(CounterContext);

  return <h1>Contador x2: {counterX2}</h1>;
};

export default DoubleCounter;
