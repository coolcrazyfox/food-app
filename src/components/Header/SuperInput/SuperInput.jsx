import React from "react";
import s from "./SuperInput.module.css";
const SuperInput = () => {
  let label = document.querySelector("label");
  label.innerHTML = label.innerText
    .split("")
    .map((letters, i) => `<span>${letters}</span>`)
    .join("");
  return (
    <div className={s.main_container}>
      <div className={s.inputBox}>
        <input type="text" required />
        <label>Wavy Input TextAnimation</label>
      </div>
    </div>
  );
};

export default SuperInput;
