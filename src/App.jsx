import Counter from "./components/Counter";
import DoubleCounter from "./components/DoubleCounter";
import { CounterContextProvider } from "./contexts/CounterContext";
import "./App.css";

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>COUNTER</h1>
        <div className="box">
          <Counter />
          <DoubleCounter />
        </div>
      </div>
    </CounterContextProvider>
  );
}

export default App;
