import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.category}</h1>
      <div className={styles.fullContainer}>
        <div className={styles.smallContainer}>
          <h1 className={styles.h1}>UX Case Study</h1>
          <p className={styles.p}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electro is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electro
          </p>
          <button className={styles.btn}>Submit</button>
        </div>
        <div className={styles.smallContainer1}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
