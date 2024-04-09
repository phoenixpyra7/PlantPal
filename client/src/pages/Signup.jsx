import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      );
    }
    return (

      <form className="space-y-6" onSubmit={handleFormSubmit}>
        {" "}
        {/* Moved onSubmit to the outer form */}
        <div>
            <label htmlFor="username" 
            className="block text-sm font-medium leading-6 text-slate-100">
              Username
              </label>
            <div className="mt-2">
              <input id="username" name="username" type="text" value={formState.name} onChange={handleChange} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-slate-100"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-slate-100"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  };

  return (
    <main
    //  background image
      style={{
        backgroundImage: `url(/images/background3.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="flex min-h-screen w-screen flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-15 text-center text-4xl font-bold leading-9 tracking-tight text-slate-100">
            Create an Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Rendering the form */}
          {renderForm()}
          {/* Rendering the error message */}
          {error && (
            <div>{"There was an error signing up, please try again"}</div>
          )}
          {/* Rendering the success message */}
          {data && <div>{"Thank you for signing up with PlantPal"}</div>}
        </div>
      </div>
    </main>
  );
};

export default Signup;
