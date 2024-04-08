import { useState } from 'react'
import React from "react";


const SavedCollection = () => {
  const containerStyle = {
    backgroundImage: `url('./src/images/background1.png')`,
    backgroundSize: 'cover', // Adjust the size of the background image
    // Add other background properties as needed
  };

  return (
    <div style={containerStyle}>
      {/* Your component content */}
    </div>
  );
};

export default SavedCollection;





// const MyCollection = ({}) => {


 

//   return (
//     <div>
//       <h1>My Collection</h1>
//       <div>
//      {/* TODO: add component for list of cards */}
//       {/* Maybe card with cards nested inside */}
//       </div>
//       <div>
        
//       <p>This is where we will keep the saved plants.</p>
//       </div>
     
//     </div>
//   );
// };

// export default MyCollection;
