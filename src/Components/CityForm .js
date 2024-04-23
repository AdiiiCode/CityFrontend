// src/components/CityForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CityForm = () => {
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post('/api/cities', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccessMessage('City information and images uploaded successfully!');
      setErrorMessage('');
      console.log(response.data);
    } catch (error) {
      setErrorMessage('Failed to upload city information and images.');
      setSuccessMessage('');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add City with Images</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">City Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="images">Select Images (up to 3):</label>
          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CityForm;
