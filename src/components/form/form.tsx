'use client'; // THis is a client side component
import styles from './form1.module.css';
import React, { useState } from 'react';
import { Plant } from '../../../Types/plant';
import axios from 'axios';
// import { Dropzone } from '../dropzone/dropzone';
import { useRouter } from 'next/navigation';

const Form = () => {
  const router = useRouter();

  const formData: Plant = {
    name: '',
    scientificName: '',
    image: '',
    watering: undefined,
    soilDrainage: undefined,
  };

  const [responseBody, setResponseBody] = useState<Plant>(formData);
  const [nameError, setNameError] = useState<string>('');
  const [imageError, setImageError] = useState<string>('');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log('hi', event.target.value);
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (responseBody.name == '') {
      setNameError('Name is required');
    }
    if (responseBody.image == '') {
      setImageError('Image is required');
    }
    if (responseBody.name && responseBody.image) {
      try {
        // Create a JSON object containing the data to send
        const plantData = {
          name: responseBody.name,
          scientificName: responseBody.scientificName,
          image: 'helloo',
          watering: responseBody.watering,
          soilDrainage: responseBody.soilDrainage,
        };
        console.log(plantData);

        const response = await axios.post('http://localhost:3001/plants', plantData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('post response', response);
        if (response.status === 201) {
          router.push('/'); // Go to homepage
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    }
    console.log(responseBody);
    //Form submission happens here
  };
  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={styles.image}>
        <label htmlFor="image">Image</label>
        <input id="image" name="image" value={responseBody.image} onChange={(e) => inputChangeHandler(e)} type="text" />
        <span>{imageError}</span>
        {/* //TODO: get image url */}
        {/* <Dropzone value={formData.image} onChange={(e:any) => inputChangeHandler(e)} /> */}
      </div>

      <div className={styles.subForm}>
        <div className={styles.label}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={responseBody.name} onChange={(e) => inputChangeHandler(e)} type="text" />
          <span>{nameError}</span>
        </div>
        <div className={styles.label}>
          <label htmlFor="scientificName">Scientific Name</label>
          <input
            id="scientificName"
            name="scientificName"
            value={responseBody.scientificName}
            onChange={(e) => inputChangeHandler(e)}
            type="text"
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="watering">Water Frequency</label>

          <div className={styles.watering}>
            <input type="radio" id="daily" name="watering" value="daily" onChange={(e) => inputChangeHandler(e)} />
            <label htmlFor="daily">Daily</label>

            <input
              type="radio"
              id="biweekly"
              name="watering"
              value="biweekly"
              onChange={(e) => inputChangeHandler(e)}
            />
            <label htmlFor="biweekly">Bi-Weekly</label>

            <input
              type="radio"
              id="fortnightly"
              name="watering"
              value="fortnightly"
              onChange={(e) => inputChangeHandler(e)}
            />
            <label htmlFor="fortnightly">Fortnightly</label>
          </div>
        </div>
        <div className={styles.label}>
          <label htmlFor="soilDrainage">Soil drainage</label>

          <select
            name="soilDrainage"
            id="soilDrainage"
            value={responseBody.soilDrainage}
            onChange={(e) => inputChangeHandler(e)}
          >
            <option value="">Choose selection</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </div>{' '}
        <input className={styles.button} type="submit" value="Add Plant" />
      </div>
    </form>
  );
};
export default Form;
