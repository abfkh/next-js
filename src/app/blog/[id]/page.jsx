import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div>
      <div className={styles.fullContainer}>
        <div className={styles.smallContainer1}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            width={500}
            height={300}
          />
        </div>
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
          {/* <button className={styles.btn}>Submit</button> */}
        </div>
      </div>
      <div className={styles.desc}>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electro is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electro is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          <br />
          <br />
          <br />
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electro is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electro is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electro is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          <br />
          <br />
          <br />
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electro is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electro is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electro is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          <br />
          <br />
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electro is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electro
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
