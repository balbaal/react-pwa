import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="relative">
        <img
          className="object-cover h-25 w-full rounded"
          src="/_DSC2910.jpeg"
          alt="img-card-sell"
        />
        <a
          href="#"
          className="bg-white rounded px-2 py-1 text-gray-500 absolute cursor-pointer"
          style={{ fontSize: 9, left: 5, bottom: 5 }}
        >
          5 hrs ago
        </a>
      </div>
      <div className="py-2">
        <h3 className="text-gray-800 text-lg font-semibold leading-none mb-2">
          Armo Compound
        </h3>
        <h4 className="text-gray-500 text-xs">Maw Maw Farming Supplies</h4>
        <h4 className="text-green-800 text-sm font-semibold">300000 MMK</h4>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
