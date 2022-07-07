import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops</p>

      <Link href="coffee-store/23">
        <button className={styles.button}>
          <a>{props.buttonText}</a>
        </button>
      </Link>
    </div>
  );
};

export default Banner;
