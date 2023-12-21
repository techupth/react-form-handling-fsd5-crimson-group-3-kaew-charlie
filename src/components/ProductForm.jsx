import React, { useState } from "react";

function ProductForm() {
  const inputForm = {};
  const propertiesList = ["name", "image", "price", "description"];
  for (let key of propertiesList) {
    inputForm[key] = { value: null, set: null };
    [inputForm[key].value, inputForm[key].set] = useState("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`{
      "name": "${inputForm.name.value}",
      "price": ${inputForm.price.value},
      "image": "${inputForm.image.value}",
      "description": "${inputForm.description.value}",
    }`);
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              inputForm.name.set(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              inputForm.image.set(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              inputForm.price.set(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              inputForm.description.set(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
