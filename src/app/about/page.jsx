import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1655720410101-c5cc15b1faf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          className={styles.img}
          fill={true}
        />
        <div className={styles.imgText}>
          <h1 className={styles.title}>who we are</h1>
          <h2 className={styles.desc}>ask your self</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>who we are</h1>
          <p className={styles.desc}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>who we are</h1>
          <p className={styles.desc}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
          </p>

          <p className={styles.desc}>- we are pro</p>
          <p className={styles.desc}>- we are pro</p>
          <button className={styles.btn}>See Our Works</button>
        </div>
      </div>
    </div>
  );
};

export default About;
