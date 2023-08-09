'use client'; // THis is a client side component
import styles from './styles.module.css';
import React, { useCallback, useState } from 'react';
import { Plant } from '../../../../Types/plant';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const formData: Plant = {
    id: undefined,
    name: '',
    scientificName: '',
    image: '',
    watering: undefined,
    soilDrainage: undefined,
  };

  const [responseBody, setResponseBody] = useState<Plant>(formData);
  const [nameError, setNameError] = useState<string>('');
  const [imageError, setImageError] = useState<string>('');

  const Dropzone = () => {
    const [paths, setPaths] = useState([]);

    const onDrop = useCallback(
      (acceptedFiles: any) => {
        setPaths(acceptedFiles.map((file: any) => URL.createObjectURL(file)));
      },
      [setPaths],
    );
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
      <div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={styles.imageDropDown}>
            <FontAwesomeIcon icon={faImage} color="#909192" size="5x" />
          </div>
        </div>
        {paths.map((path) => (
          <Image key={path} src={path} alt="" />
        ))}
      </div>
    );
  };
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (responseBody.name == '') {
      setNameError('Name is required');
    }
    if (responseBody.image == '') {
      setImageError('Image is required');
    }
    console.log(responseBody);
    //Form submission happens here
  };
  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <div className={styles.image}>
        {/* <label htmlFor="image">Image</label>
        <input id="image" name="image" onChange={(e) => inputChangeHandler(e)} type="text" />
        <span>{imageError}</span> */}
        <Dropzone />
      </div>
      <div className={styles.subForm}>
        <div className={styles.label}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" onChange={(e) => inputChangeHandler(e)} type="text" />
          <span>{nameError}</span>
        </div>
        <div className={styles.label}>
          <label htmlFor="scientificName">Scientific Name</label>
          <input id="scientificName" name="scientificName" onChange={(e) => inputChangeHandler(e)} type="text" />
        </div>

        <div className={styles.label}>
          <label htmlFor="watering">Water Frequency</label>
          <select name="watering" id="watering" onChange={(e) => inputChangeHandler(e)}>
            <option value="">Choose selection</option>
            <option value="daily">Daily</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="weekly">Weekly</option>
            <option value="fortnightly">Fortnightly</option>
          </select>
        </div>
        <div className={styles.label}>
          <label htmlFor="watering">Soil drainage</label>
          <select name="watering" id="watering" onChange={(e) => inputChangeHandler(e)}>
            <option value="">Choose selection</option>
            <option value="daily">High</option>
            <option value="biweekly">Low</option>
          </select>
        </div>
        <input className={styles.button} type="submit" value="Add Plant" />
      </div>
    </form>
  );
};
export default Form;
