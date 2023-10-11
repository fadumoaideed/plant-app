import React from 'react';
import styles from './hero.styles.module.css';
import Link from 'next/link';

// Animation of plant being watered and growing
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.headline}>
          The<span className={styles.span}> easiest</span> way to keep plants{' '}
          <span className={styles.span}> alive</span>
        </h1>
        <h3 className={styles.subheadline}>Look after your plants in seconds and get smart, personalized care info.</h3>
        <Link className={styles.button} href="/add-plant">
          Add plant
        </Link>
        <div className={styles.heroImage}> </div>
      </div>
    </div>
  );
}

export default Hero;
