import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Clickpage } from "./components/Clickpage";
import { useState } from "react";

function App() {
  const [Num, setNum] = useState(0);
  const [coin, setCoin] = useState(0);
  function clicked() {
    setNum(Num + 1);
  }

  function addCoin() {
    setCoin(coin + 1);
  }

  return (
    <div>
      {coin}
      {Num}

      <h6>destroy planets</h6>
      <button onClick={clicked}>Destroy planet</button>
    </div>
  );
}

export default App;
