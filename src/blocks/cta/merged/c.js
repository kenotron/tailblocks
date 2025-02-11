import React from "react";
import PropTypes from  "prop-types";

function LightCTAC(props) {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep.
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-theme-500 focus:bg-transparent focus:ring-2 focus:ring-theme-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:border-theme-500 dark:focus:ring-theme-900 dark:text-gray-100 dark:duration-200"
            />
          </div>
          <div className="relative flex-grow w-full">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-theme-500 focus:bg-transparent focus:ring-2 focus:ring-theme-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:focus:border-theme-500 dark:focus:ring-theme-900 dark:text-gray-100 dark:duration-200"
            />
          </div>
          <button className="text-white bg-theme-500 border-0 py-2 px-8 focus:outline-none hover:bg-theme-600 rounded text-lg dark:text-white dark:bg-theme-500 dark:hover:bg-theme-600">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

LightCTAC.defaultProps = {
  theme: 'indigo'
};

LightCTAC.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightCTAC;
