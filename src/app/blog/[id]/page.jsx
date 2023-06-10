import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { cache: "no-store" },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

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
          <h1 className={styles.h1}>{data.title}</h1>
          <p className={styles.p}>{data.body}</p>
          {/* <button className={styles.btn}>Submit</button> */}
        </div>
      </div>
      <div className={styles.desc}>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
