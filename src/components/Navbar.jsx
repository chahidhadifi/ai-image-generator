import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
        <a
          href="/"
          class="inline-flex items-center gap-2.5 text-xl font-medium text-gray-500 md:text-3xl"
          aria-label="logo"
        >
          <svg
            class="h-auto w-8 text-indigo-500"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"></path>
          </svg>
          Creation
        </a>
        <nav class="hidden gap-12 lg:flex">
          <a
            href="#"
            class="text-base font-medium text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Home
          </a>
          <a
            href="#"
            class="text-base font-medium text-gray-500  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Features
          </a>
          <a
            href="#"
            class="text-base font-medium text-gray-500  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Contact
          </a>
          <a
            href="#"
            class="text-base font-medium text-gray-500  transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About
          </a>
        </nav>

        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Menu
        </button>
      </header>
    );
  }
}