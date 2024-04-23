// src/components/ImageUpload.js

import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      await axios.post('https://city-server-sable.vercel.app:5000/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res);
        alert('Image uploaded successfully!')
      })

    } catch (error) {
      console.error('Error uploading image: ', error);
      alert('Failed to upload image.');
    }
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
