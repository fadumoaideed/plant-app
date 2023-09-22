import styles from './homepage.styles.module.css';
import { Plant } from '../../Types/plant';
import Card from './components/card/card';
import Link from 'next/link';

async function getData() {
  const res = await fetch('http://localhost:3001/plants');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  console.log('data', data);
  return (
    <div>
      <h1 className={styles.headline}>
        The<span className={styles.span}> easiest</span> way to keep plants <span className={styles.span}> alive</span>
      </h1>
      <h3 className={styles.subheadline}>Look after your plants in seconds and get smart, personalized care info.</h3>
      {/* TOD0!: Show form on click  */}
      <Link className={styles.button} href="/add-plant">
        Add plant
      </Link>
      <h4>My Plants</h4>
      <div className={styles.list}>
        {data.map((plant: Plant) => {
          return (
            <Card
              key={plant.id}
              name={plant.name}
              image={plant.image}
              scientificName={plant.scientificName}
              watering={plant.watering}
              soilDrainage={plant.soilDrainage}
            />
          );
        })}
      </div>
    </div>
  );
}
