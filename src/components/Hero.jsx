import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col items-center text-center justify-center cursor-default pt-10">
          <p className="title lg:w-3/5 font-black pb-3 text-transparent text-6xl bg-clip-text bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200 via-indigo-500 to-purple-100">
            Text to image with AI art generator
          </p>
          <p className="mt-5 w-96 font-semibold text-gray-600 text-sm ">
            Create awe-inspiring masterpieces effortlessly and explore the
            endless possibilities of AI generated art.
          </p>
        </div>

        <div className=" flex flex-row items-center justify-center text-center">
          <div className="w-3/5">
            <form
              action=""
              method="post"
              id="revue-form"
              name="revue-form"
              target="_blank"
              class="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:flex"
            >
              <div class="flex-1 revue-form-group">
                <input
                  id="cta-email"
                  type="email"
                  class="block w-full px-5 py-3 text-neutral-600 placeholder-gray-300  bg-transparent focus:outline-none font-medium text-sm"
                  placeholder="Describe what you want to see with phrases"
                ></input>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                <button
                  type="submit"
                  value="Subscribe"
                  name="member[subscribe]"
                  id="member_submit"
                  class="block w-full px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
