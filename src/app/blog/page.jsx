"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My blog</h1>
      <div className={styles.fullContainer}>
        <div className={styles.smallContainer1}>
          <Link href="blog/article">
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width={500}
              height={300}
            />
          </Link>
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
          <Link href="blog/article">
            <button className={styles.btn}>
              {isLoading ? "loading..." : "read"}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.fullContainer}>
        <div className={styles.smallContainer1}>
          <Link href="blog/article">
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width={500}
              height={300}
            />
          </Link>
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
          <Link href="blog/article">
            <button className={styles.btn}>
              {isLoading ? "loading..." : "read"}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.fullContainer}>
        <div className={styles.smallContainer1}>
          <Link href="blog/article">
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width={500}
              height={300}
            />
          </Link>
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
          <Link href="blog/article">
            <button className={styles.btn}>
              {isLoading ? "loading..." : "read"}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.fullContainer}>
        <div className={styles.smallContainer1}>
          <Link href="blog/article">
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width={500}
              height={300}
            />
          </Link>
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
          <Link href="blog/article">
            <button className={styles.btn}>
              {isLoading ? "loading..." : "read"}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.fullContainer}>
        <div className={styles.smallContainer1}>
          <Link href="blog/article">
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width={500}
              height={300}
            />
          </Link>
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
          <Link href="blog/article">
            <button className={styles.btn}>
              {isLoading ? "loading..." : "read"}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.fullContainer}>
        <div className={styles.smallContainer1}>
          <Link href="blog/article">
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width={500}
              height={300}
            />
          </Link>
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
          <Link href="blog/article">
            <button className={styles.btn}>
              {isLoading ? "loading..." : "read"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
