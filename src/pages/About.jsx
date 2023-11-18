import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="h-screen">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col items-center justify-center">
        <div className="w-4/5">
          <Navbar></Navbar>
          <div className="flex flex-col items-center justify-center">
            <svg
              className="logo text-indigo-500"
              width={180}
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"></path>
            </svg>
            <div className="sm:w-2/4 mt-10 font-semibold text-gray-600 text-sm cursor-default text-justify">
              <p>
                Welcome to <span className="text-indigo-500">Creation</span> 👋🏻,
                Where Words Transform into Visuals! <br />
              </p>
              <br />
              <p>
                At <span className="text-indigo-500">Creation</span> we believe
                in the power of language and the beauty of visual expression.
                Our platform is a testament to the seamless synergy between text
                and image, brought to life through the magic of artificial
                intelligence.
              </p>
              <br />
              <p>
                Our website serves as a dynamic platform that seamlessly
                converts your written expressions into visually stunning image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
