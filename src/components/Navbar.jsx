import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    const btnMenu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobile-menu");
    let isOpen = 0;
    mobileMenu.setAttribute("style", "visibility: hidden;");
    btnMenu.addEventListener("click", () => {
      if (isOpen == 0) {
        mobileMenu.setAttribute("style", "visibility: visible;");
        isOpen = 1;
      } else {
        mobileMenu.setAttribute("style", "visibility: hidden;");
        isOpen = 0;
      }
    });
  }
  render() {
    return (
      <div>
        <header className="mb-8 flex items-center justify-between py-4 md:mb-6 md:py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-xl font-medium text-gray-500 md:text-3xl transition duration-100 hover:text-indigo-500"
            aria-label="logo"
          >
            <svg
              className="h-auto w-8 text-indigo-500"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"></path>
            </svg>
            Creation
          </Link>
          <nav className="hidden gap-12 lg:flex">
            <Link
              to="/"
              className="text-base font-medium text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-gray-500  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-500  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About
            </Link>
          </nav>

          <button
            type="button"
            id="menu"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>

        <nav
          className="gap-12 flex flex-col text-sm font-semibold gap-2 absolute -mt-8 rounded-lg  bg-gray-200 right-20 py-4 px-10 bg-opacity-90"
          id="mobile-menu"
        >
          <Link
            to="/"
            className="text-base font-medium text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium text-gray-500  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-base font-medium text-gray-500  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About
          </Link>
        </nav>
      </div>
    );
  }
}
