import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/m1.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.itemtext}>
        <h1 className={styles.title}>excellnet team for your campany</h1>
        <p className={styles.desc}>with talented designer and programmer</p>

        <button className={styles.btn}>See Our Works</button>
      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  );
}
