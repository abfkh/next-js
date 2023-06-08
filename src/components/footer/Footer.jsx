import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  console.log("gfghfgh");

  return (
    <div className={styles.container}>
      <div>2023 abdo. All right reserved.</div>
      <div className={styles.social}>
        <Image
          src="/f.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Abdo Dev"
        />
        <Image
          src="/t.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Abdo Dev"
        />
        <Image
          src="/i.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Abdo Dev"
        />
        <Image
          src="/l.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Abdo Dev"
        />
      </div>
    </div>
  );
};

export default Footer;
