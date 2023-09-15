import React from 'react';
import { Plant } from '../../../../Types/plant';
import styles from './card.styles.module.css';
export function card({ name, image }: Plant) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt="alt" />
      <div className="name">{name}</div>
    </div>
  );
}

export default card;
