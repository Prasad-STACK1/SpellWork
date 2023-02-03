import React from "react";
import "./Side.css";
import { GiMagicSwirl } from "react-icons/gi";
import { GiMagicGate } from "react-icons/gi";
import { GiMagickTrick } from "react-icons/gi";
function Side() {
  return (
    <div className="sidebar">
      <button id="Doc">
        <GiMagicGate /> <span>Doctor Strange</span>
      </button>
      <button id="Wan">
        <GiMagicSwirl /> <span>Wanda</span>
      </button>
      <button id="lok">
        <GiMagickTrick /> <span>Loki</span>
      </button>
    </div>
  );
}
export default Side;
