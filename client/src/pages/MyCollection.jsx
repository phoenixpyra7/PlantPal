import { useState } from "react";
import React from "react";


// export default MyCollection;
function MyCollection () {
  const containerStyle = {
    backgroundImage: `url(/images/background8.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
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
    <div style={containerStyle}>
   <main>

      <div>
      <h6 style={h6Style}>
          MyCollection
        </h6>
    </div>

{/* CARD 1

Card body */}
<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">

  <div class="p-6">
    {/* Card title */}
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Plant Common Name Here
    </h5>
    {/* Card text */}
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      All of the plant fields will populate into here
    </p>

  </div>
  <div class="p-6 pt-0">

    {/* Card button */}
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Delete
    </button>


  </div>
</div>
</main>
</div>
  );
}











export default MyCollection;

