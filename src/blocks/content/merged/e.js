import React from "react";
import PropTypes from  "prop-types";

function ContentE(props) {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5 dark:text-white">
          Kickstarter Actually Pinterest Brunch Bitters Occupy
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">
            Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion
            axe four dollar toast truffaut, direct trade kombucha brunch
            williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking
            vinegar tacos.
          </p>
          <div className="flex md:mt-4 mt-6">
            <button className="inline-flex text-white bg-theme-500 border-0 py-1 px-4 focus:outline-none hover:bg-theme-600 rounded dark:text-white dark:bg-theme-500 dark:hover:bg-theme-600">
              Button
            </button>
            <a href className="text-theme-500 inline-flex items-center ml-4 dark:text-theme-400">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

ContentE.defaultProps = {
  theme: 'indigo'
};

ContentE.propTypes = {
  theme: PropTypes.string.isRequired
};

export default ContentE;
