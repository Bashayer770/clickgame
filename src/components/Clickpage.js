import React, { useState } from "react";

export const Clickpage = ({ Num, setNum }) => {
  const [coin, setCoin] = useState(Num);

  function building() {
    setCoin(coin - 1);
  }

  return (
    <div>{Num >= 10 ? <button onClick={building}>building</button> : null}</div>
  );
};
