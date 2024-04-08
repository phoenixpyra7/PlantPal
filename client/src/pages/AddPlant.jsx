
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
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

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
    annualOrPerennials: "",
    blooms: "",
    flowers: "",
    deciduous: "",
    notes: "",
  });
  // const [formState, setFormState] = useState({ email: "", password: "" });

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
      // send the data to graphql server (mutation:)
    } catch (e) {
      console.error(e);
    }

    // When adding a new input, clear the form for each
    // Clear form values after successful submission
    setFormState({
      commonName: "",
      scientificName: "",
      sunlight: "",
      directOrIndirect: "",
      water: "",
      annualOrPerennials: "",
      blooms: "",
      flowers: "",
      deciduous: "",
      notes: "",
    });
    //unable to fix syntax error here******************
    // } catch (e) {
    //   console.error(e);
  };

  return (
    // this controls the container
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        {/* Page Decor */}
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#01a862] to-[#7268fb] opacity-40 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">

       {/* Title and description */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let's add your plant</h2>

        <p className="mt-2 text-lg leading-8 text-gray-600">
          This is where you will enter the information you find on the plant tag. 
        </p>



      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
                // autoComplete="given-name" don't need this
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
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
                // autoComplete="family-name"
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          {/* Sunlight field */}
          <div className="sm:col-span-2">
            <label htmlFor="sunlight" className="block text-sm font-semibold leading-6 text-gray-900">
              Sunlight
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="sunlight"
                id="sunlight"
                // autoComplete="organization"
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* direct or indirect sun field */}
          <div className="sm:col-span-2">
            <label htmlFor="directOrIndirect" className="block text-sm font-semibold leading-6 text-gray-900">
              Direct or Indirect Sun
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                // NOT SURE HOW TO NAME THIS
                name="directOrIndirect"
                id="directOrIndirect"
                // autoComplete="organization"
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

            {/* water field */}
          <div className="sm:col-span-2">
            <label htmlFor="water" className="block text-sm font-semibold leading-6 text-gray-900">
              Water
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="water"
                id="water"
                // autoComplete="organization"
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

            {/* A/P field */}
          <div className="sm:col-span-2">
            <label htmlFor="annualOrPerenial" className="block text-sm font-semibold leading-6 text-gray-900">
              Annual or Perenial
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="annualOrPerenial"
                id="annualOrPerenial"
                // autoComplete="organization"
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* blooms field */}
          <div className="sm:col-span-2">
            <label htmlFor="blooms" className="block text-sm font-semibold leading-6 text-gray-900">
              Blooms
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="blooms"
                id="blooms"
                // autoComplete="organization"
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/*Flowers field  */}
          <div className="sm:col-span-2">
            <label htmlFor="flowers" className="block text-sm font-semibold leading-6 text-gray-900">
              Flowers
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="flowers"
                id="flowers"
                // autoComplete="organization"
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

            {/* Deciduous field */}
          <div className="sm:col-span-2">
            <label htmlFor="deciduous" className="block text-sm font-semibold leading-6 text-gray-900">
              Deciduous
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="deciduous"
                id="deciduous"
                // autoComplete="organization"
                // the next 3 broke the page
                // required
                // value={formState.commonName}
                // onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* This is for the radio button */}
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
              // can we change this to true false or yes no?
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-red-600' : 'bg-gray-400',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                {/* Not sure if this is still needed */}
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>

                  {/* radio button label */}
            <Switch.Label className="text-sm leading-6 text-gray-600">
              {/* Can the privacy policy link do anything fun for this section? */}
              This plant is Deciduous
            </Switch.Label>
          </Switch.Group>

          {/* This is for any notes the user may want to include */}
          <div className="sm:col-span-2">
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
          </div>
          {/* END OF THE FORM FIELDS */}

          {/* THIS IS THE SUBMIT BUTTON */}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to my collection
          </button>
        </div>
      </form>
    </div>
  )
};

export default AddPlant;


// Cannot use AddPlant as a component, put Example back for now


