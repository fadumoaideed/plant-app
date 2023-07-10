'use client'; // THis is a client side component

import { useState } from 'react';
import { Plant } from '../../../../Types/plant';

const Form = () => {
  const formData: Plant = { name: '' };
  const [responseBody, setResponseBody] = useState<Plant>(formData);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(responseBody);
    //Form submission happens here
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input id="name" name="name" onChange={(e) => inputChangeHandler(e)} type="text" />
    </form>
  );
};
export default Form;
