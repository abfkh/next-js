import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  <Link href={url}>
    return <button className={styles.contianer}>{text}</button>;
  </Link>;
};

export default Button;
