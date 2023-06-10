"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { cache: "no-store" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Blog = async () => {
  // Add the 'async' keyword here
  const data = await getData();
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My blog</h1>

      {data.map((item) => (
        <div className={styles.test}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            width={500}
            height={300}
          />
          <div className={styles.last}>
            <Link href="blog/article" key={item.id}>
              <h1 className={styles.h1}>{item.title}</h1>
              <p className={styles.p}>{item.body}</p>
              <button className={styles.btn}>
                Read Full article
                {/* {isLoading ? "loading..." : "read the full article"} */}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
