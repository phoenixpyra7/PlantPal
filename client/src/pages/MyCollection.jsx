import React from "react";

const MyCollection = ({}) => {
  // state for all of the form data
  // TODO: when adding a new input, add the form state
  const [formState, setFormState] = useState({ commonName: "",});
  // const [formState, setFormState] = useState({ email: "", password: "" });
 
  // on change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  // on sumbmit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // send the data to graphql server (mutation:)
    } catch (e) {
      console.error(e);
    }

    // TODO: when adding a new input, clear the form for each
    // clear form values
    setFormState({
      commonName: "",
    });
  };

  return (
    <div>
      <h1>My Collection</h1>
      <div>
        {/* TODO: add component for the form */}
        <form onSubmit={handleFormSubmit}>
        <div>
              <label
                htmlFor="commonName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Common Name
              </label>
              <div className="mt-2">
                <input
                  id="common-name"
                  name="commonName"
                  type="text"
                  required
                  value={formState.commonName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

        </form>
      </div>
      <div>
        {/* TODO: add component for list of cards */}
      <p>This is where we will keep the saved plants.</p>
      </div>
     
    </div>
  );
};

export default MyCollection;
