'use client'; // THis is a client side component
import React, { useState } from 'react';

interface FormInputInterface {
  plantname?: string;
}
function Form() {
  const [plantname, setPlantname] = useState('');
  function handleSubmit(e: any) {
    e.preventDefault();
    alert(plantname);
  }
  function handleChange(e: any) {
    setPlantname(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <h3>Plant name</h3>
      <input type="text" name="plantname" onChange={handleChange} value={plantname} />
      <input type="submit" />
    </div>
  );
}

export default Form;
