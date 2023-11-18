import React from "react";
import Navbar from "../components/Navbar";

function Contact() {
  //Your access key from Web3Froms
  const WEB3FORMS_ACCESS_KEY = "";
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      document.getElementById("myForm").reset();
    }
  };
  return (
    <div>
      <div className="h-screen">
        <div className="container mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col items-center justify-center">
          <div className="w-4/5">
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center sm:w-2/4 font-semibold text-gray-600 text-sm cursor-default text-justify">
                <svg
                  className="logo text-indigo-500 mb-5"
                  width={100}
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"></path>
                </svg>
                <div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <p>
                      Want to get in touch? We'd love to hear from you. <br />{" "}
                      Here's how you can reach us 👇🏻.
                    </p>
                  </div>
                  <form onSubmit={onSubmit} id="myForm">
                    <div className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-100 rounded-xl sm:flex">
                      <div className="flex-1 revue-form-group">
                        <input
                          type="text"
                          name="name"
                          className="block w-full px-5 py-3 text-neutral-600 placeholder-gray-300  bg-transparent focus:outline-none font-medium text-sm"
                          placeholder="Name"
                        ></input>
                      </div>
                    </div>
                    <div className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-100 rounded-xl sm:flex">
                      <div className="flex-1 revue-form-group">
                        <input
                          type="email"
                          name="email"
                          className="block w-full px-5 py-3 text-neutral-600 placeholder-gray-300  bg-transparent focus:outline-none font-medium text-sm"
                          placeholder="Email"
                        ></input>
                      </div>
                    </div>
                    <div className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-100 rounded-xl sm:flex">
                      <div className="flex-1 revue-form-group">
                        <textarea
                          name="message"
                          className="resize-none block w-full px-5 py-3 text-neutral-600 placeholder-gray-300  bg-transparent focus:outline-none font-medium text-sm"
                          placeholder="Message"
                          rows="4"
                          cols="50"
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <button
                        type="submit"
                        className="block px-5 py-3 my-7 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                      >
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
