"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  // const a = ["paras", "gey"];
  // const [v, sv] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (v == a.length - 1) sv(0);
  //     else sv(v + 1);
  //   }, 1000);
  // }, [v]);
  return (
    <>
      <br></br>
      <section id="home">
        <div className={styles.hero}>
          <Image
            src="/hero-image.png"
            height={252}
            width={330}
            className={styles.heroimage}
            alt="hero-image.png"
          ></Image>
          <h1 className={styles.herotagline}>
            <span>
              <span className={styles.coffee}>COFFEE</span> THAT
            </span>
            <br />
            <span>SPEAKS OF</span>
            <br />
            <span>
              <span className={styles.home}>HOME</span>
            </span>
          </h1>
        </div>
        <div className={styles.heromobile}>
          <Image
            src="/hero-image-mobile.png"
            height={252}
            width={330}
            className={styles.heroimagemobile}
            alt="hero-image.png"
          ></Image>
          <h1 className={styles.herotagline}>
            <span>
              <span className={styles.coffee}>COFFEE</span> THAT
            </span>
            <span>
              SPEAKS OF <span className={styles.home}>HOME</span>
            </span>
          </h1>
        </div>
        <div className={styles.arrowcontainer}>
          <a className={styles.arrowlink} href="#journey">
            {/* Arrow SVG start   */}
            <svg
              className={styles.arrows}
              width="92"
              height="91"
              viewBox="0 0 92 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Down Arrow">
                <path
                  id="upper_arrow"
                  d="M45.6504 38.8784L46 39.2203L46.3496 38.8784L61.3409 24.215C62.6136 22.9702 64.6484 22.973 65.9177 24.2212C67.2197 25.5018 67.2197 27.6008 65.9177 28.8814L46 48.4698L26.0823 28.8814C24.7803 27.6008 24.7803 25.5018 26.0823 24.2212C27.3516 22.973 29.3864 22.9702 30.659 24.215L45.6504 38.8784Z"
                  fill="#D9D9D9"
                  stroke="#A38C77"
                  className={styles.upperarrow}
                />
                <path
                  id="lower_arrow"
                  d="M45.6504 61.4981L46 61.8401L46.3496 61.4981L61.3409 46.8348C62.6136 45.59 64.6484 45.5927 65.9177 46.841C67.2197 48.1215 67.2197 50.2206 65.9177 51.5011L46 71.0896L26.0823 51.5011C24.7803 50.2206 24.7803 48.1215 26.0823 46.841C27.3516 45.5927 29.3864 45.59 30.659 46.8348L45.6504 61.4981Z"
                  fill="#D9D9D9"
                  stroke="#A38C77"
                />
              </g>
            </svg>
            {/*Arrow SVG end */}
          </a>
        </div>
        <div className={styles.clouds}>
          <Image
            src="/left-cloud.png"
            width={400}
            height={100}
            alt="left-cloud.png"
            className={styles.cloudleft}
          ></Image>
          <Image
            src="/right-cloud.png"
            width={400}
            height={100}
            alt="right-cloud.png"
            className={styles.cloudright}
          ></Image>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>das</h1>
    </>
  );
}
