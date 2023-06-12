import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
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
            src={data.img}
            width={500}
            height={300}
          />
        </div>
        <div className={styles.smallContainer}>
          <h1 className={styles.h1}>{data.title}</h1>
          <p className={styles.p}>{data.content}</p>
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
