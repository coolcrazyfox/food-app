import React from "react";
import s from "./SuperInput.module.css";
const SuperInput = () => {
  return (
    <div className={s.inputBox}>
      <input type="text" required />
      <label>Wavy Input TextAnimation</label>
    </div>
  );
};

export default SuperInput;
