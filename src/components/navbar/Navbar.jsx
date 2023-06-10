"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  // const [isLoading, setIsLoading] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <Link rel="stylesheet" href="/" className={styles.logo}>
        abdo
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
            setIsLoading(true);
          }}
        >
          {isLoading ? "loading..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
