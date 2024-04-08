import { useState } from "react";
import React from "react";

// const SavedCollection = () => {
//   const containerStyle = {
//     // backgroundImage: `url('./src/images/background1.png')`,
//     // backgroundSize: "cover", // Adjust the size of the background image
//     // img src="./src/images/background2.png" bg-scroll style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: '0.7'}} alt="background image of a light green succulent" 
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Your component content */}
//       <div>
//         <h1>My Collection</h1>
//         <div>
//           {/* TODO: add component for list of cards */}
//           {/* Maybe card with cards nested inside */}
//         </div>
//         <div>
//           <p>This is where we will keep the saved plants.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SavedCollection;
const SavedCollection = () => {
  const containerStyle = {
    backgroundImage: `url('./src/images/background1.png')`,
    backgroundSize: "cover", // Adjust the size of the background image
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    opacity: '0.9',
  };

  return (
    <div style={containerStyle}>
      <img
        src="./src/images/background1.png"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        alt="background image of a light green succulent"
      />
    </div>
  );
};

export default SavedCollection;