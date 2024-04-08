import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Auth from '../utils/auth';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navberger() {
  const logout = (event) => {
    event.preventDefault();
  Auth.logout();
  };


  let navigation = [{ name: "Home", href: "./", current: false }];
  
  
  if (Auth.loggedIn()) {
    navigation = navigation.concat([
     
      { name: "MyCollection", href: "/mycollection", current: false },
      { name: "About", href: "/about", current: false },
      { name: "Add Plant", href: "/addplant", current: false },
      { name: "Logout", onClick: Auth.logout,  href: "/login", current: false },
     
    ]);
  
  }
  if (!Auth.loggedIn()) {
    console.log("not logged in")
    navigation = navigation.concat([
      { name: "About", href: "/about", current: false },
      { name: "Login", href: "/login", current: false },
      { name: "Signup", href: "/signup", current: false },
    ]);
  }


  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-around">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button icon outline removed*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <img
                        className="h-8 w-8 rounded-full"
                        src="./src/images/leaf1.png"
                        alt="two leafs touching, light green and dark green"
                      />

                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                 
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={
                          item.current
                            ? "bg-gray-900 text-white mx-1"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white sm:mx-1"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* this is to change the layout of the nav bar when open leaf icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                </button>

              </div>
                {/* Mobile menu view, edit text layout */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 space-x-8 px-10 pb-3 pt-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-slate-100"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
        </div>
        </>
      )}
    </Disclosure>
  );
}



export default Navberger;
