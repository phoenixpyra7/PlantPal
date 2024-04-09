import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ME } from "../utils/queries";


// export default MyCollection;
function MyCollection() {
  const [user, setUser] = useState({});
  const { loading, error, data } = useQuery(QUERY_ME); // Destructuring the result of useQuery

  useEffect(() => {
    const getMyCollection = async () => {
      try {
        if (!loading && !error) { // Ensure data is available and no errors occurred
          setUser(data); // Update myCollection with the fetched data
        }
        console.log(JSON.stringify(user.me));
      } catch (error) {
        console.error(error);
      }
    };

    getMyCollection(); // Call the function to fetch and update data
  }, [loading, error]); // Include loading and error in the dependency array to re-run the effect when they change
  
  if (loading) {
    return <h2>Loading…</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

 // JSON.parse() is used to convert the stringified JSON object to a JavaScript object


  const containerStyle = {
    backgroundImage: `url(/images/background8.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    opacity: "0.9",
  };

  const h6Style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1", // To ensure the h1 appears above the image
    color: "#98f6da", // Color of preference for title
    fontSize: "3rem", // Font size
    fontWeight: "bold", // Font weight
    fontFamily: "sans-serif", // Font family
    textAlign: "center", // Center the text
  };
  
  // if no plants, show something else
  if (!user.plants) {
    return (
      <div style={containerStyle}>
        <h6 style={h6Style}>MyCollection</h6>
        
        <p className= "block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-3">No plants in collection</p>
      </div>
    )
  }
  return (
    <div style={containerStyle}>
      <h6 style={h6Style}>MyCollection</h6>
      <main>
        {
          user && user.plants && user.plants.map((plant, index) => (
        <div key={`${plant.commonName}-${index}`} className="flex-initial grid grid-cols-1 gap-5 container mx-auto flex-col mt-0 text-white bg-green-700 shadow-xl bg-clip-border rounded-xl w-96">
          <div className="p-6">


            {/* Card title */}
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
              Plant Common Name Here
            </h5>


            {/* Card body/text */}
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              All of the plant fields will populate into here
            </p>
            <p>Scientific Name: {plant.scientificName}</p>
            <p>Sunlight: {plant.sunlight}</p>
           <p>Direct Or Indirect: {plant.directOrIndirect}</p>
           <p>Water: {plant.water}</p>
           <p>Annual Or Perennial: {plant.annualOrPerennial}</p>
           <p>Blooms: {plant.blooms}</p>
           <p>Flowers: {plant.flowers}</p>
           <p>Deciduous: {plant.deciduous}</p>
           <p>Notes: {plant.notes}</p>

          </div>

 {/* Card button */}
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:pointer-events-none 
             shadow-md shadow-black-900/5 text-xs py-3 px-6 rounded-lg bg-fuchsia-950 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
            
          ))
        }
            {/* CARD 1 */}

            {/* Card  */}
      </main>
    </div>
  );
}

export default MyCollection;

// for each on the data and return a card
{/* <div className="card">
  <h5 className="card-title">Common name: {plant.common_name}</h5>
  <div className="card-body">
    <p>Scientific name: {plant.scientific_name}</p>
    <p>Family: {plant.family}</p>
    <p>Genus: {plant.genus}</p>
    <p>Species: {plant.species}</p>
    <p>Subspecies: {plant.subspecies}</p>
  </div>
</div> */}





