
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import React from "react";
import {useMutation} from '@apollo/client'
import {ADD_PLANT} from '../utils/mutations'
import { useNavigate } from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const AddPlant = ({}) => {
  // state for all of the form data
  // When added a new input, added the form state
  const [agreed, setAgreed] = useState(false)
  const [formState, setFormState] = useState({
    commonName: "",
    scientificName: "",
    sunlight: "",
    directOrIndirect: "",
    water: "",
    annualOrPerennial: "",
    blooms: "",
    flowers: "",
    deciduous: "",
    notes: "",
  });
  

  const [savePlant, { error }] = useMutation(ADD_PLANT);
  const navigate = useNavigate();


  // on change handler
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
      const { data } = await savePlant({
        variables: { plants: { ...formState} },
      });

      // send the data to graphql server (mutation:)

      // redirect user profile
      navigate('/mycollection');
    } catch (e) {
      console.error(e);
    }

    // Clear form values after successful submission
    setFormState({
      commonName: "",
      scientificName: "",
      sunlight: "",
      directOrIndirect: "",
      water: "",
      annualOrPerennial: "",
      blooms: "",
      flowers: "",
      deciduous: "",
      notes: "",
    });
 
  };

  return (
    // this controls the container
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">

       {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let's add your plant</h2>
        {/* desscription */}
        <p className="mt-2 text-lg leading-8 text-gray-600">
          On this page, you can add the information you find on the plant tag. You can reference the About page for information on each field. Once you are finished, click "Add to MyCollection" and you will be automatically redirected!
        </p>


      </div>
      <form onSubmit={handleFormSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
          {/* Common Name field */}
          <div>
            <label htmlFor="commonName" className="block text-sm font-semibold leading-6 text-gray-900">
              Common Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="commonName"
                id="commonName"
                required
                value={formState.commonName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
        {/* Scientific Name field */}
          <div>
            <label htmlFor="scientificName" className="block text-sm font-semibold leading-6 text-gray-900">
              Scientific Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="scientificName"
                id="scientificName"
                value={formState.scientificName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          {/* Sunlight field */}
          {/* <div className="sm:col-span-2"> */}
          <div>
              
            <label htmlFor="sunlight" className="block text-sm font-semibold leading-6 text-gray-900">
              Full Sun, Partial Sun, Full Shade
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="sunlight"
                id="sunlight"
                value={formState.sunlight}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
          {/* </div> */}
          </div>

          {/* direct or indirect sun field */}
          {/* <div className="sm:col-span-2"> */}
          <div>
            <label htmlFor="directOrIndirect" className="block text-sm font-semibold leading-6 text-gray-900">
              Direct Sun or Indirect Sun
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="directOrIndirect"
                id="directOrIndirect"
                value={formState.directOrIndirect}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          {/* </div> */}
          </div>
            {/* water field */}
          {/* <div className="sm:col-span-2"> */}
          <div>
            <label htmlFor="water" className="block text-sm font-semibold leading-6 text-gray-900">
              Water: Dry, Normal, Moist
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="water"
                id="water"
                value={formState.water}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          {/* </div> */}
          </div>
            {/* A/P field */}
          {/* <div className="sm:col-span-2"> */}
          <div>
            <label htmlFor="annualOrPerennial" className="block text-sm font-semibold leading-6 text-gray-900">
              Annual or Perennial
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="annualOrPerennial"
                id="annualOrPerennial"
                value={formState.annualOrPerennial}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          {/* </div> */}
          </div>
          {/* blooms field */}
          {/* <div className="sm:col-span-2"> */}
          <div>
            <label htmlFor="blooms" className="block text-sm font-semibold leading-6 text-gray-900">
              Blooms in season(s)
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="blooms"
                id="blooms"
                value={formState.blooms}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          {/* </div> */}
          </div>

          {/*Flowers field  */}
          {/* <div className="sm:col-span-2"> */}
          <div>
            <label htmlFor="flowers" className="block text-sm font-semibold leading-6 text-gray-900">
              Can it grow flowers?
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="flowers"
                id="flowers"
                value={formState.flowers}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          {/* </div> */}
          </div>
            {/* Deciduous field */}
          {/* <div className="sm:col-span-2"> */}
          <div>
            <label htmlFor="deciduous" className="block text-sm font-semibold leading-6 text-gray-900">
              Deciduous?
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="deciduous"
                id="deciduous"
                value={formState.deciduous}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          {/* </div> */}
          </div>

          {/* This is for any notes the user may want to include */}
          {/* <div className="sm:col-span-2"> */}
          <div>
            <label htmlFor="notes" className="block text-sm font-semibold leading-6 text-gray-900">
              Notes
            </label>
            <div className="mt-2.5">
              <textarea
                name="notes"
                id="notes"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          {/* </div> */}
          </div>
          {/* END OF THE FORM FIELDS */}

          {/* THIS IS THE SUBMIT BUTTON */}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to MyCollection
          </button>
        </div>
      </form>
    </div>
  )
};

export default AddPlant;

