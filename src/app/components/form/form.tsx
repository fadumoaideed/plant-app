'use client'; // THis is a client side component
import React, { useState } from 'react';

interface FormInputInterface {
  plantname?: string;
}
function Form() {
  const [form, setForm] = useState<FormInputInterface>({});
  function handleSubmit(e: any) {
    e.preventDefault();
    alert(form);
  }
  function handleChange(e: any) {
    setForm({ ...form, plantname: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <h3>Plant name</h3>
      <input type="text" name="plantname" onChange={handleChange} value={form.plantname} />
      <input type="submit" />
    </div>
  );
}

export default Form;
