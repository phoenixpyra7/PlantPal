import { useState } from "react";
import React from "react";


// export default MyCollection;
const MyCollection = () => {
  const containerStyle = {
    backgroundImage: `url('/images/background5.png')`,
    backgroundSize: "cover", // Adjust the size of the background image
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    opacity: '0.9',
  };

  const h6Style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1', // To ensure the h1 appears above the image
    color: '#1ecc98', // Color of preference for title
    fontSize: '3rem', // Font size 
    fontWeight: 'bold', // Font weight
    fontFamily: 'sans-serif', // Font family
    textAlign: 'center', // Center the text
  };

  return (
    <main
    //  background image
      style={{
        backgroundImage: `url(/images/background8.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        opacity: '0.9', 
      }}
    >

      <div>
      <h6 style={h6Style}>
          My Collection
        </h6>
    </div>
    </main>
  );
};

export default MyCollection;

