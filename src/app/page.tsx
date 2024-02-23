import styles from './homepage.module.css';
// import { Plant } from '../../Types/plant';
import Hero from '../components/Hero/Hero';
// import Card from '../components/Card/card';
import jsonData from '../api/db.json';

async function getData() {
  const res = await fetch('http://localhost:3001/plants');

  if (!res.ok) {
    return jsonData;
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <Hero />

      {/* <h4>My Plants</h4> */}
      <div className={styles.list}>
        {/* {data.map((plant: Plant) => {
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
        })} */}
      </div>
    </div>
  );
}
