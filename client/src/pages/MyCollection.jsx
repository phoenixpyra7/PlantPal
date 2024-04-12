import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_PLANT } from "../utils/mutations";

// export default MyCollection;
function MyCollection() {
  const { loading, error, data } = useQuery(QUERY_ME); // Destructuring the result of useQuery
  const [removePlant, { error: removeError }] = useMutation(REMOVE_PLANT);

  const user = data?.me || {};
  
  if (loading) {
    return <h2>Loading…</h2>;
  }

  if (error || removeError) {
    return <h2>Error: {error.message || removeError.message}</h2>;
  }

  const deletePlant = async (plant) => {
    await removePlant({
      variables: { plant },
      refetchQueries: [{ query: QUERY_ME }],
    });
  }

  const containerStyle = {
    backgroundImage: `url(/images/background8.png)`,
  };
  
  // if no plants, show something else
  if (!user.plants) {
    return (
      <div className="bg-cover bg-center opacity-90 min-h-screen bg-[url('/images/background8.png')]">
        <h6 className="text-5xl font-bold py-5 text-indigo-600 font-sans text-center">MyCollection</h6>
        
        <p className= "block font-sans text-5xl antialiased font-semibold leading-snug tracking-normal text-white mb-3">No plants in collection</p>
      </div>
    )
  }
  return (
    <div className="bg-cover bg-center opacity-90 min-h-screen bg-[url('/images/background8.png')]">
      <h6 className="text-6xl font-bold py-5 text-teal-200 font-sans text-center">MyCollection</h6>
      <main className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {
          user && user.plants && user.plants.map((plant, index) => (
        <div key={`${plant.commonName}-${index}`} className="flex-initial grid grid-cols-1 gap-5 container mx-auto my-5 flex-col mt-0 text-white bg-teal-600 shadow-xl bg-clip-border rounded-xl w-96">
          <div className="p-6 ">


            {/* Card title */}
            <h5 className="block mb-2 font-sans text-3xl underline-offset-2 font-semibold leading-normal tracking-normal text-black">
              <p> {plant.commonName}</p>
            </h5>


            {/* Card body/text */}
            {/* for each on the data and return a card */}
            <p className="block font-sans text-2xl antialiased ">
              {/* All of the plant fields will populate into here */}
            </p>
            <p className="text-slate-300"> {plant.scientificName}</p>
            <br></br>
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
              onClick={() => deletePlant(plant.commonName)}
              className="align-middle select-none font-sans font-semibold text-center uppercase transition-all disabled:opacity-50 disabled:pointer-events-none shadow-md shadow-black-900/5 text-xs py-2 px-2 rounded-lg bg-fuchsia-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
            
          ))
        }
           
      </main>
    </div>
  );
}

export default MyCollection;








