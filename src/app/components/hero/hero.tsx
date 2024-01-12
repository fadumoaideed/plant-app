/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './hero.styles.module.css';
import Link from 'next/link';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../../../fonts/Berkshire_Swash/BerkshireSwash-Regular.ttf' });

// Animation of plant being watered and growing
function Hero() {
  return (
    <div className={styles.hero}>
      <h2 id={styles['heroHeading']} className={myFont.className}>
        Botanify
      </h2>
      <img className={styles.heroImage} src="images/heroImage2.png" alt="placeholder" />

      <div className={styles.heroText}>
        <h4 className={styles.headline}>
          The<span className={styles.span}> easiest</span> way to keep plants
          <span className={styles.span}> alive</span>
        </h4>
        <div className={styles.pinkShadow}></div>

        <Link className={styles.button} href="/add-plant">
          Get planting
        </Link>

        {/* //TODO? Make more semantically correct and use button instead of link */}
      </div>
      {/*//TODO*: move svgs into a component and only add position attributes in the usages*/}
      <svg className={styles.svg1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="rgb(226, 232, 229, 0.5)"
          d="M46.4,-65.4C60.1,-53.9,71.1,-40.3,68,-27.4C64.9,-14.5,47.7,-2.3,40.4,10.9C33.1,24.1,35.6,38.3,30.5,44C25.4,49.7,12.7,47,-1.1,48.5C-14.9,50,-29.8,55.8,-44.1,53.1C-58.3,50.3,-71.7,39,-78.9,24C-86.1,8.9,-87.1,-9.8,-75,-17.3C-62.9,-24.9,-37.8,-21.1,-23.1,-32.4C-8.4,-43.6,-4.2,-69.8,6.1,-78.2C16.3,-86.5,32.7,-77,46.4,-65.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg className={styles.svg2} viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="none"
          stroke="rgb(4, 85, 54)"
          d="M46.4,-65.4C60.1,-53.9,71.1,-40.3,68,-27.4C64.9,-14.5,47.7,-2.3,40.4,10.9C33.1,24.1,35.6,38.3,30.5,44C25.4,49.7,12.7,47,-1.1,48.5C-14.9,50,-29.8,55.8,-44.1,53.1C-58.3,50.3,-71.7,39,-78.9,24C-86.1,8.9,-87.1,-9.8,-75,-17.3C-62.9,-24.9,-37.8,-21.1,-23.1,-32.4C-8.4,-43.6,-4.2,-69.8,6.1,-78.2C16.3,-86.5,32.7,-77,46.4,-65.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg width="400" height="180">
        <rect x="10" y="10" width="100" height="100" fill="none" stroke="pink" />
      </svg>
    </div>
  );
}

export default Hero;
