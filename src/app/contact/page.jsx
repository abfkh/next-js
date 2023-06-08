import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import co from "public/m2.svg";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in touch with us</h1>
      <div className={styles.contnet}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={co} />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />

          <textarea
            placeholder="messege"
            cols="30"
            rows="10"
            className={styles.input}
          ></textarea>
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
