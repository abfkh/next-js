"use clinet";
import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";
const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  //   const mode = "light";
  return (
    <div className={styles.containerToggle} onClick={toggle}>
      <div className={styles.icon}>☀️</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.ballToggle}
        style={mode === "light" ? { left: "5px" } : { right: "5px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
