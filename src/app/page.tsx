import styles from './homepage.module.css';
// import { Plant } from '../../Types/plant';
import Hero from '../components/Hero/Hero';
// import Card from '../components/Card/card';
import jsonData from '../api/db.json';
import { getData } from '../api/api';
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
