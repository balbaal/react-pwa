import React from "react";
import PropTypes from "prop-types";

const CardArticle = (props) => {
  const { className } = props;
  return (
    <div className={["flex", className].join(" ")}>
      <div style={{ width: 140, minHeight: 140 }}>
        <img
          className="object-cover h-full w-full rounded-tl rounded-bl"
          src="/_DSC3071.jpeg"
          alt="Access to Markets"
        />
      </div>
      <div className="py-2 flex flex-col justify-center pl-3 shadow w-full rounded-tr rounded-br relative">
        <h3 className="leading-none text-gray-800 text-lg font-semibold mb-2">
          Access to Markets
        </h3>
        <h4 className="text-gray-500 text-xs">
          Farmers with similar crop varieties and higher than average yields are
          grouped and their produce or waste marketed to larger buyers
        </h4>
        <a
          href="#"
          className="bg-green-700 rounded px-2 py-1 text-white absolute cursor-pointer"
          style={{ fontSize: 9, right: 5, bottom: 5 }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

CardArticle.propTypes = {
  className: PropTypes.string,
};

export default CardArticle;
