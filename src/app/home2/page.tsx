'use client';
import styles from './home2.module.css';
import Video from '@/components/video/video';
import localFont from 'next/font/local';

export default async function Home() {
  return (
    <div className={styles.home2}>
      <h2 id={styles['hero_headline']}>
        Your <br></br> Green Oasis <br></br> Awaits
      </h2>
      {/* <Video video={'images/monstera-mobile.mp4'} /> */}
      <div className={styles.arrow}>
        <span
        // onClick={() => {
        //   console.log('hi');
        // }}
        ></span>
      </div>
    </div>
  );
}
