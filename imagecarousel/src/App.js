import React, { useState } from 'react';
import Carousel from './Carousel';
import './App.css';

const App = () => {
  const images = [
    "https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  const [galleryOpen, setGalleryOpen] = useState(false);

  const toggleGallery = () => {
    setGalleryOpen(!galleryOpen);
  };

  return (
    <div className="app">
      <h1>Project: Image Carousel</h1>
      <div className="image">
        {/* Render the Carousel component only when the gallery is open */}
        {galleryOpen && <Carousel images={images} />}
      </div>

      {/* Add the "Open Gallery" button */}
      <button className="open-gallery-button" onClick={toggleGallery}>
        {galleryOpen ? 'Close Gallery' : 'Open Gallery'}
      </button>
    </div>
  );
};

export default App;