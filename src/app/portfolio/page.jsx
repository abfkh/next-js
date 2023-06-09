import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleFiled}>UX/UI works</h1>
      <div className={styles.gallery}>
        <div className={styles.galleryContainer}>
          <Link href="portfolio/ux">
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className={styles.img}
              width={200}
              height={400}
            />

            <h3 className={styles.h1}>Carify app - UX/UI Case Study</h3>
          </Link>
        </div>
        <div className={styles.galleryContainer}>
          <Link href="portfolio/ux">
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className={styles.img}
              width={200}
              height={400}
            />

            <h3 className={styles.h1}>Carify app - UX/UI Case Study</h3>
          </Link>
        </div>
        <div className={styles.galleryContainer}>
          <Link href="portfolio/backend">
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className={styles.img}
              width={200}
              height={400}
            />

            <h3 className={styles.h1}>Carify app - UX/UI Case Study</h3>
          </Link>
        </div>
        <div className={styles.galleryContainer}>
          <Link href="portfolio/ui">
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className={styles.img}
              width={200}
              height={400}
            />

            <h3 className={styles.h1}>Carify app - UX/UI Case Study</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
