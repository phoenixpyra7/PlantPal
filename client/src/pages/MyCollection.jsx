import { useState } from "react";
import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_PLANTS } from "../utils/queries";

// export default MyCollection;
function MyCollection() {
  const [myCollection, setMyCollection] = useState([]);

  const { data, loading, error } = useQuery(QUERY_PLANTS);
  const users = data?.users || [];

  if (error) {
    throw Error(error);
  }

  if (loading) {
    return <h2>Loading…</h2>;
  }

 // JSON.parse() is used to convert the stringified JSON object to a JavaScript object

//const MyCollection instead?
  const getMyCollection = () => {
    fetch("/api/myCollection")
      .then((res) => res.json())
      .then((data) => {
        setMyCollection(data);
      });
  };

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

  return (
    <div style={containerStyle}>
      <h6 style={h6Style}>MyCollection</h6>
      <main>

            {/* CARD 1 */}

            {/* Card body */}
        <div className="flex-initial grid grid-cols-10 gap-5 container mx-auto flex-col mt-0 text-white bg-green-700 shadow-xl bg-clip-border rounded-xl w-96">
          <div className="p-6">


            {/* Card title */}
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
              Plant Common Name Here
            </h5>


            {/* Card text */}
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              All of the plant fields will populate into here
            </p>
          </div>
          <div className="p-6 pt-0">


            {/* Card button */}
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:pointer-events-none 
             shadow-md shadow-black-900/5 text-xs py-3 px-6 rounded-lg bg-fuchsia-950 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyCollection;
