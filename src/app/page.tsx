// import Form from './components/form/form';

import { Plant } from '../../Types/plant';

async function getData() {
  const res = await fetch('http://localhost:3001/plants');
  console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  // console.log('data', data);
  return (
    <div>
      {data.map((plant: Plant) => {
        return <div key={plant.id}>{plant.name}</div>;
      })}
    </div>
  );
}
