import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Clickpage } from "./components/Clickpage";
import { useState } from "react";
import boop from "./Sounds/boop.mp3";
import funtown from "./Sounds/funtown.mp3";
import collecting from "./Sounds/collecting.mp3";
import achievement from "./Sounds/achievement.mp3";
import coi from "./assets/images/coi.svg";

function App() {
  const [Num, setNum] = useState(1);
  const [coin, setCoin] = useState(Num);
  const [clicks, setClicks] = useState(2);
  const [theupgrade, setTheupgrade] = useState(false);

  function building() {
    if (coin >= 2) {
      setCoin(coin - 3);
    } else {
      alert("You don't have enough coins!");
    }
  }
  function clicked() {
    new Audio(boop).play();
    setNum(Num + 1);
    setCoin(coin + 1);
    new Audio(collecting).play();
  }

  function double() {
    setClicks(clicks + 2);
  }
  function upgrade() {
    if (coin >= 3) {
      new Audio(achievement).play();
      setCoin(coin - 3);
      setNum(Num + 2);
    } else {
      alert("You don't have enough coins!");
    }
  }

  //function play(){

  //}

  return (
    <div id="demo" className="swap">
      <Header />
      <h4>{coin} coins</h4>
      {/* <svg scr={coi} /> */}
      <h3 className="score">{Num}</h3>

      <h6>{Num} destroyed planets</h6>
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
