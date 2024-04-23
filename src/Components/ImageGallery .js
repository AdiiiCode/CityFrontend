import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the backend when the component mounts
    const fetchImages = async () => {
      try {
        const response = await fetch('https://city-server-sable.vercel.app:5000/get-image');
        const data = await response.json();
        if (data.status === 'ok') {
          setImages(data.data); // Update images state with the fetched data
        } else {
          console.log('Error fetching images');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.map((image) => (
          <img
            key={image._id} // Assuming each image has a unique _id from MongoDB
            src={`http://localhost:5000/images/${image.im}`} // Assuming 'im' is the image filename
            alt="Uploaded"
            style={{ width: '500px', height: '200px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
