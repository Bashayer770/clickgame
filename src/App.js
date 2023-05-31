import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Clickpage } from "./components/Clickpage";
import { useState } from "react";

function App() {
  const [Num, setNum] = useState(0);
  const [coin, setCoin] = useState(Num);
  const [show, setShow] = useState(false);

  function building() {
    setCoin(coin - 3);
  }

  function clicked() {
    setNum(Num + 1);
    setCoin(coin + 1);
  }

  function upgrade() {
    setNum((Num) => Num * 6);
    setCoin(coin - 3);
  }

  return (
    <div>
      <Header />
      <h4>{coin}</h4>
      <h3>{Num}</h3>

      <h6>destroy planets</h6>
      <button onClick={clicked} className="buttonDestroy">
        Destroy planet
      </button>
      {Num >= 10 ? <button onClick={building}>building</button> : null}
      {Num >= 25 ? <button onClick={upgrade}>upgrade</button> : null}
    </div>
  );
}

export default App;
