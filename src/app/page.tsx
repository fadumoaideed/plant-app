import styles from './homepage.styles.module.css';
import { Plant } from '../../Types/plant';
import Card from './components/card/card';
import Link from 'next/link';
import Hero from './components/hero/hero';

async function getData() {
  const res = await fetch('http://localhost:3001/plants');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  console.log('data', data);
  return (
    <div>
      <Hero />

      {/* <h4>My Plants</h4>
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
      </div> */}
    </div>
  );
}
