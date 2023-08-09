import React from "react";
import s from "./SuperInput.module.css";
const SuperInput = () => {
  let label = document.querySelector("label");
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letters, i) =>
        `<span style='transition-delay:${i * 30}ms'>${letters}</span>`
    )
    .join("");
  return (
    <div className={s.main_container}>
      <div className={s.inputBox}>
        <input type="text" required />
        <label>Wavy&nbsp;Input&nbsp;Text&nbsp;Animation</label>
      </div>
    </div>
  );
};

export default SuperInput;
