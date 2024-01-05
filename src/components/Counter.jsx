import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const Counter = () => {
  const { counter, somarCounter } = useContext(CounterContext);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={somarCounter}>Adicionar</button>
    </>
  );
};

export default Counter;
