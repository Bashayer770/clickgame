import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Clickpage } from "./components/Clickpage";
import { useState } from "react";
import Sniper from "./Sounds/Sniper.mp3";
import funtown from "./Sounds/funtown.mp3";

function App() {
  const [Num, setNum] = useState(1);
  const [coin, setCoin] = useState(Num);

  function building() {
    setCoin(coin - 3);
  }

  function clicked() {
    new Audio(Sniper).play();
    setNum(Num + 1);
    setCoin(coin + 1);
  }

  function upgrade() {
    new Audio(funtown).play();
    setNum((Num) => Num * 6);
    setCoin(coin - 3);
  }

  //function play(){

  //}

  return (
    <div id="demo" className="swap">
      <Header />
      <h4>{coin} coins</h4>
      <h3>{Num}</h3>

      <h6>{Num}destroy planets</h6>
      <button
        onClick={clicked}
        className={`buttonDestroy ${Num % 5 == 0 ? "rotateme" : ""}`}
      >
        Destroy planet
      </button>
      {/* <Clickpage coin={coin} setCoin={setCoin} /> */}
      {Num >= 10 ? (
        <button className="building" onClick={building}>
          building
        </button>
      ) : null}
      {Num >= 25 ? (
        <button className="upgrade" onClick={upgrade}>
          upgrade
        </button>
      ) : null}
    </div>
  );
}

export default App;
