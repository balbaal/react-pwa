import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { title, className } = props;

  return (
    <button
      type="submit"
      className={[
        "text-white bg-green-700 px-4 py-2 outline-none border-none focus:outline-none focus:bg-green-800 font-semibold rounded-full",
        className,
      ].join(" ")}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
