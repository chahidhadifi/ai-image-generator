import React, { Component } from "react";
import axios from "axios";

export default class Hero extends Component {
  componentDidMount() {
    // API Key from EdenAI
    const API_KEY = "";
    const submitbtn = document.querySelector("#submitbtn");
    const inputuser = document.querySelector("#inputuser");
    const logo = document.querySelector(".logo");
    const imageElement = document.createElement("img");
    const imageContainer = document.querySelector("#imagecontainer");
    submitbtn.addEventListener("click", async () => {
      const inputuservalue = inputuser.value;
      imageElement.setAttribute("style", "display: none;");
      logo.setAttribute("style", "display: block;");
      logo.setAttribute("style", "animation-name: rotate;");
      const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/image/generation",
        headers: {
          authorization: `Bearer ${API_KEY}`,
        },
        data: {
          show_original_response: false,
          fallback_providers: "",
          providers: "replicate",
          text: inputuservalue,
          resolution: "512x512",
        },
      };
      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          inputuser.value = "";
          imageContainer.classList.add("image-container");
          imageElement.setAttribute(
            "class",
            "h-full w-full object-cover object-center rounded-lg bg-gray-100 shadow-lg"
          );
          imageElement.setAttribute(
            "src",
            response.data.replicate.items[0].image_resource_url
          );
          logo.setAttribute("style", "display: none;");
          imageElement.setAttribute("style", "display: block;");
          imageContainer.append(imageElement);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  render() {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="sm:flex-shrink-0 sm:w-4/6">
          <div className="flex flex-col items-start text-left justify-start cursor-default pt-10">
            <p className="title font-black pb-3 text-transparent text-6xl bg-clip-text bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200 via-indigo-500 to-purple-100">
              Text to image with AI art generator
            </p>
            <p className="mt-4 font-semibold text-gray-600 text-sm w-3/4">
              Create awe-inspiring masterpieces effortlessly and explore the
              endless possibilities of AI generated art.
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row items-start justify-start text-center">
            <div className="w-5/6">
              <div className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:flex">
                <div className="flex-1 revue-form-group">
                  <input
                    id="inputuser"
                    type="text"
                    className="block w-full px-5 py-3 text-neutral-600 placeholder-gray-300  bg-transparent focus:outline-none font-medium text-sm"
                    placeholder="Describe what you want to see with phrases"
                  ></input>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                  <button
                    type="submit"
                    id="submitbtn"
                    className="block w-full px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto mt-10 md:mt-auto" id="imagecontainer">
          <svg
            className="logo text-indigo-500 h-0 w-0 ml-20 mt-14 sm:h-60 sm:w-60"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"></path>
          </svg>
        </div>
      </div>
    );
  }
}
